import React, { Component } from 'react';
import axios from "axios";
import './Joke.css';

class Joke extends Component {
    constructor(props){
        super(props);
        this.state={
            joke:"",
            score:0,
            state:"😒"
        };
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }
    async componentDidMount(){
        let url ="https://icanhazdadjoke.com/";
        let response =await axios.get(url,{
            headers: {Accept: "application/json"}
        });
        this.setState({joke:response.data.joke});
        console.log(response.data);
    }

    upvote(){
        let x1 = this.state.score;
        this.setState({score:x1+1});
    let score = this.state.score;
    console.log(this.state.score);

    if(score<=4 && score>=1){
        this.setState({state:"😃"});
    }
    else if(score<=10 && score>=5){
        this.setState({state:"😂"});
    }
    else if(score<=15 && score>=11){
        this.setState({state:"🤣"});
    }
    else if(score<=0 && score>=-4){
        this.setState({state:"😐"});
    }
    else if(score<=-5 && score>=-10){
        this.setState({state:"😑"});
    }
    else if(score<=-11 && score>=-15){
        this.setState({state:"😣"});
    }


    }
    downvote(){
        let x2 = this.state.score;
        this.setState({score:x2-1});
    let score = this.state.score;
    console.log(this.state.score);

    if(score<=4 && score>=1){
        this.setState({state:"😃"});
    }
    else if(score<=10 && score>=5){
        this.setState({state:"😂"});
    }
    else if(score<=15 && score>=11){
        this.setState({state:"🤣"});
    }
    else if(score<=0 && score>=-4){
        this.setState({state:"😐"});
    }
    else if(score<=-5 && score>=-10){
        this.setState({state:"😑"});
    }
    else if(score<=-11 && score>=-15){
        this.setState({state:"😣"});
    }
    }

  render(){
    
  return (
   <div className="Joke-Container"> 
      <h3> 
      Score- [{ this.state.score}] 
      <button onClick ={this.upvote}>Upvote</button>
      <button onClick ={this.downvote}>Downvote</button> 

      {
       this.state.state
      } 

      {this.state.joke} 
      </h3>
   </div>
   
  );
  }
}

export default Joke;