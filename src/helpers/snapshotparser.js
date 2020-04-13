const snapshotParser = (snapshot) => {
  if (Array.isArray(snapshot.docs)) {
    const items = snapshot.docs.map(doc => doc.data())
    return items
  } else {
    const data = snapshot.data()
    data._id = snapshot.id
    return data
  }
}

export default snapshotParser
