import React, { Component } from 'react';
import JokeList from './JokeList';
import './App.css';



class App extends Component {
  render(){
  
  return (
   
   <div className="Container">
     
     <h1 className="heading">Dad's Joke!!</h1>
      <JokeList/>
   </div>

   
  );
  }
}

export default App;