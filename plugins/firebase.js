import { defineNuxtPlugin } from "#app"
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyDqCUpTgKFGyxM6iBhcmZ-d4lYkz5Fi_kk",
        authDomain: "eosky-a9938.firebaseapp.com",
        projectId: "eosky-a9938",
        storageBucket: "eosky-a9938.appspot.com",
        messagingSenderId: "985559979249",
        appId: "1:985559979249:web:093aac808f590e7c600550"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
})