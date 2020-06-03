const snapshotParser = (snapshot) => {
  if (Array.isArray(snapshot.docs)) {
    const items = snapshot.docs.map(doc => doc.data())
    return items
  } else {
    try {
      const data = snapshot.data()
      data._id = snapshot.id
      return data
    } catch (error) {
      console.error('error', error)
      return null
    }
  }
}

export default snapshotParser
