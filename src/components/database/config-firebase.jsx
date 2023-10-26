
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBINj0Y9IbySR31u3M8YW8rMNZb7HYrLNw",
  authDomain: "inmobiliara2.firebaseapp.com",
  projectId: "inmobiliara2",
  storageBucket: "inmobiliara2.appspot.com",
  messagingSenderId: "491333774765",
  appId: "1:491333774765:web:1a13b45b7f4aff8cc8c524"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)