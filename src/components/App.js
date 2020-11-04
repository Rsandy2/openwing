// import React, { Component } from 'react';
import React, { useState } from "react";
import "./App.css";

import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Navbar, NavItem } from "./Navbar";
import Post from "./Post";

firebase.initializeApp({
  apiKey: "AIzaSyAJzEI9t6DSZ-M4OfDgvTOvq523JjIVw4Y",
  authDomain: "openwing-b6da7.firebaseapp.com",
  databaseURL: "https://openwing-b6da7.firebaseio.com",
  projectId: "openwing-b6da7",
  storageBucket: "openwing-b6da7.appspot.com",
  messagingSenderId: "1087141256901",
  appId: "1:1087141256901:web:f5cb5258d5cb448f0e1aac",
  measurementId: "G-NBNTKS1VHT",
});

//Global Variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <Post
        postID="Mountains"
        imageURL="https://images4.alphacoders.com/110/1109932.jpg"
        postDESC="A nice view."
      />
    </div>
  );
}

export default App;
