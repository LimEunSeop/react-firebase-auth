// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcX5Job7Aw6K9HbdsIuCukiRDnlDN8Ugc',
  authDomain: 'eunseop-e5bfb.firebaseapp.com',
  projectId: 'eunseop-e5bfb',
  storageBucket: 'eunseop-e5bfb.appspot.com',
  messagingSenderId: '1045584586520',
  appId: '1:1045584586520:web:ba78a88fc187e23c9ba06d',
  measurementId: 'G-YV446QYZLJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
