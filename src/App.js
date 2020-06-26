import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component { 
  
  state = {
    friends: [
    {
      id: 1,
      status: 'Friend',
      name: 'Lily',
  },
  {
      id: 2,
      status: 'Friend',
      name: 'Jaewon',
    },
    {
      id: 3,
      status: 'Friend',
      name: 'Raneem',
    }
  ]
}
  render(){
    const { friends } = this.state;
    
  return (
      
    <div className="App">
      <header className="App-header">      {
        friends.map((person) =>(
          <Person
          id = {person.id}
          name = {person.name}
          status = {person.status}
          />
          ))
      }
        </header>

    </div>
  )
  } 
} 

export default App;
