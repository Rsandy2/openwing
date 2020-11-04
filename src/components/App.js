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
