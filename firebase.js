// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpepR_m86KVxupvgLSdj_FU7T86PfCHVs',
  authDomain: 'tinder-clone-51532.firebaseapp.com',
  projectId: 'tinder-clone-51532',
  storageBucket: 'tinder-clone-51532.appspot.com',
  messagingSenderId: '139111823956',
  appId: '1:139111823956:web:89ed7798b04e69b3d18bc1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
