import React, { Component } from 'react';
import Joke from './Joke';
import uuid from '../node_modules/uuid/dist/v4';

class JokeList extends Component {
 constructor(props){
        super(props);
        this.state={
            qt:1
        };
        this.morejokes = this.morejokes.bind(this);
    }

    morejokes(){
        let x = this.state.qt;
        this.setState({qt:x+1});
    }
  render(){
  let arr= [];
  let cnt = this.state.qt;
  for(let i =0; i<cnt; i++){
      let newarr= [];
      arr.push(newarr);
  }
  return (

   <div>
       
       <div>
      {arr.map(()=>{return(
           <div>
      <Joke id={uuid()}/>
      <Joke id={uuid()}/>
      <Joke id={uuid()}/>
      <Joke id={uuid()}/>
      <Joke id={uuid()}/>
           </div>
       );})}
       </div>
      
      <div>
          <button onClick={this.morejokes}>Get more Jokes</button>
      </div>

   </div>
   
  );
  }
}

export default JokeList;