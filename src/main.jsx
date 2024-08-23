import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-SKiElx-HRLTrga_dPoNXY1KU8rW_uiE",
  authDomain: "storerc-204da.firebaseapp.com",
  projectId: "storerc-204da",
  storageBucket: "storerc-204da.appspot.com",
  messagingSenderId: "158892006436",
  appId: "1:158892006436:web:e5c77b5fe33be43be04cb1",
  measurementId: "G-WH9FTF5WVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider>
        <App />
        </ChakraProvider>
      </React.StrictMode>
      ,
)
