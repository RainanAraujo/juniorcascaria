import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: 'juniorcascaria-4fba1.appspot.com',
  messagingSenderId: '188585988293',
  appId: '1:188585988293:web:19b2d8c421c023b958e0ac',
  measurementId: 'G-KVLS6P3LRJ'
}

console.log(firebaseConfig)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export default firebase
