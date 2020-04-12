import { db, storageRef } from './firebase'

const article = {
  /**
   * @params data::object
   * @return id created or false
   * create a new item
  **/
  async upload ({ title = '', description = '', sku = '', price = 0, picture = '', pictures = [] }) {
    try {
      const { id } = await db.collection('Articulos').add({ title, description, sku, price, picture, pictures })
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
  }

}
export default article
