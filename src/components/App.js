import React, { Component } from 'react';
import './App.css';
import Post from './Post'; 

class App extends Component { 
  render() {
    return (
    <div className="App">
      <div className="app__header">
        {/* Header */}
          {/* <img
            className="app__headerImage"
            src="https://img.icons8.com/ios/50/000000/wing.png"
            alt="..." /> */}
      
      <h1>OpenWing</h1>

      </div>
         
        {/* Post */}
        <Post />
        {/* Post */}
      </div>
    )
  }
} 

export default App;
