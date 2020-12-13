import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Navbar from "./Navbar";
import Post from "./Post";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router> */}
      <Navbar />
      <Post
        postID="Mountains"
        imageURL="https://images4.alphacoders.com/110/1109932.jpg"
        postDESC="A nice view."
      />
      <Post
        postID="Leaves"
        imageURL="https://images8.alphacoders.com/451/451034.jpg"
        postDESC="Another nice view."
      />
    </div>
  );
}

export default App;
