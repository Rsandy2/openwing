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
      
      <h1>Openwing</h1>

      </div>
         <div className="post">
        {/* Post */}
        <Post />
        <Post />
        {/* Post */}
        </div>
      </div>
    )
  }
} 

export default App;
