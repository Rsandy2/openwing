// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Navbar, NavItem } from './Navbar';
import Post from './Post'; 
import './App.css';

 
function App() {
  const [posts, setPosts] = useState([
    {
        postID: "FOX NEWS" ,
        imageUrl: "https://images3.alphacoders.com/108/thumb-1920-1085992.jpg",
        postDesc: "People"
    },
    {
        postID: "MSNBC",
        imageUrl: "https://images2.alphacoders.com/108/thumb-1920-1085635.jpg",
        postDesc: "Reports"
    }
  ])
  return (
    <div className="App">
      <div className="app__header">
        {/* Header */}

         <h1>Openwing</h1>
 
      <Navbar>
        <NavItem item_text="Start"/>
        <NavItem item_text="Start"/>
        <NavItem item_text="Start"/>
      </Navbar>

      
      </div>
         <div className="post">
        {/* Post */}

            {
              posts.map(post => (
                <Post 
                  postID={post.postID} 
                  imageUrl={post.imageUrl}
                  postDesc={post.postDesc}
                />))
            }

     
        
        {/* <Post /> */}
        {/* Post */}
        </div>
      </div>
    )
  }

 


export default App;
