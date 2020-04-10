import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
import config from '../config'

firebase.initializeApp(config.firebase);
firebase.auth().languageCode = 'es_419';

export const db = firebase.firestore();
export const storage = firebase.storage()
export const storageRef = storage.ref();