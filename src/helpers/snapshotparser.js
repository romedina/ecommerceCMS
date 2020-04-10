const snapshotParser = (snapshot) => {
  if (Array.isArray(snapshot.docs)) {
    alert('working')
  } else {
    const data = snapshot.data()
    data._id = snapshot.id
    return data
  }
}

export default snapshotParser
