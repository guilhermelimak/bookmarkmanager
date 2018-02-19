import firebase from 'firebase'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'bookmarkmanager-d8faf.firebaseapp.com',
  databaseURL: 'https://bookmarkmanager-d8faf.firebaseio.com/',
  projectId: 'bookmarkmanager-d8faf',
  storageBucket: 'bookmarkmanager-d8faf.appspot.com',
  messagingSenderId: '1012325978286'
}

export const app = firebase.initializeApp(config)
export const db = app.database()
