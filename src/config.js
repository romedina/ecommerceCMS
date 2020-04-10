const specificData = [
  { type: 'int', key: 'keyname', label: 'text to show', max: 99, min: 0 },
  { type: 'text', key: 'keynametext', label: 'text to show', maxLength: 99 },
  { type: 'select', key: 'keynameselect', label: 'text to show', options: [{ a: 'valuea' }, { b: 'valueb' }, { c: 'valuec' }] },
  { type: 'radio', keyname: 'keynameradio', label: 'label radio', options: [{ a: 'valuea' }, { b: 'valueb' }, { c: 'valuec' }] },
  { type: 'checkbox', keyname: 'keynameCheck', label: 'checkbox', options: [] }
]

const firebase = {
  apiKey: 'AIzaSyDGmuP3Cp8D3LgMAr89IcZBfq4y1g9fzj4',
  authDomain: 'somos-marketplace.firebaseapp.com',
  databaseURL: 'https://somos-marketplace.firebaseio.com',
  projectId: 'somos-marketplace',
  storageBucket: 'somos-marketplace.appspot.com',
  messagingSenderId: '404758906021',
  appId: '1:404758906021:web:b405f16b3359f1d881b94c',
  measurementId: 'G-PV24KTN13F'
}

export default {
  firebase,
  specificData
}
