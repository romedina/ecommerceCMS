import { db, storageRef } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

const article = {
  /**
   * @param id::int
   * @return true||false::bool
   * set disable on status
   */
  async setInactive (id) {
    await db.doc(`Articulos/${id}`).update({
      isActive: false
    })
  },

  /**
   * @param id::int
   * @return true||false::bool
   * set active on status
   */
  async setActive (id) {
    await db.doc(`Articulos/${id}`).update({
      isActive: true
    })
  },

  /**
 * @param id::int
 * @return true||false::bool
 * delete item on database
 */
  async delete (id) {
    try {
      await db.doc(`Articulos/${id}`).delete()
      return true
    } catch (error) {
      console.error('error_Descript:', error)
      return false
    }
  },
  /**
   * @params data::object
   * @return id created or false
   * create a new item
  **/
  async upload ({ title = '', description = '', sku = '', price = 0, picture = '', pictures = [] }) {
    try {
      const { id } = await db.collection('Articulos').add({ date: new Date(), isActive: true, title, description, sku, price, picture, pictures })
      await db.collection('Articulos').doc(id).update({ id })
      return id
    } catch (error) {
      console.error('error_description:', error)
      return false
    }
  },
  /**
   * @params id:int, data:object
   * @return true or false
   * update a data of item
   */
  async update (id, data) {
    try {
      data.date = new Date()
      await db.doc(`Articulos/${id}`).update(data)
      return true
    } catch (error) {
      console.error('error_description:', error)
      return false
    }
  },
  /**
   * @params id_article::int and photo::file and OPTIONAL::bool
   * @return url or false
   */
  async uploadPicture (id, picture, primary) {
    var name = picture.name
    if (primary) name = `primary_${name}`
    const nameEncoded = encodeURIComponent(name)
    const newNameEncoded = encodeURIComponent(`thumb@1100_${name}`)
    const { ref } = await storageRef.child(`${id}/${name}`).put(picture)
    const url = await ref.getDownloadURL()
    var urlTransformed = url.replace(nameEncoded, newNameEncoded)
    urlTransformed = urlTransformed.split('&token')[0]
    return urlTransformed
  },
  /**
   * @params lastItem::snap, Limit::int
   * @return Object of = Items::array, lastItem::snap
   */
  async getList (lastItem = null, limit = null) {
    try {
      var query = db.collection('Articulos')
      if (limit) query = query.limit(limit)
      if (lastItem) query.startAfter(lastItem)
      const snapshot = await query.get()
      const items = snapshotParser(snapshot)
      return { items, last: snapshot.docs[snapshot.docs.length - 1] }
    } catch (error) {
      console.error('error_description:', error)
      return { items: [], last: null }
    }
  },

  /**
   * @param urlPicture::string and idarticle::string
   * @return true or false :: bool
   */
  async deletePicture (id, url) {
    try {
      const urlDecoded = decodeURIComponent(url)
      var urlToDelete = urlDecoded.split(id)[1]
      urlToDelete = urlToDelete.split('?')[0]
      urlToDelete = `${id}/${urlToDelete}`
      await storageRef.child(urlToDelete).delete()
      return true
    } catch (error) {
      console.log('error_description:', error)
      return false
    }
  }

}

export default article
