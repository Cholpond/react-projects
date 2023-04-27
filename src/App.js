import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button'


class App extends React.Component {
  constructor() {
    super();
    this.state ={
      number:0
    }
  }

  incrementNum = () => {
    if(this.state.number < 10){
      return(
        this.setState({number: this.state.number +1})
      );
    }else{
      return(
        this.setState({number:0})
      )
    }
  }

  decrementNum = () => {
    this.state.number > - 10 ? this.setState({number: this.state.number -1}) : this.setState({number: 0})
    
  }

  resetNum = () => {
    this.setState({number: 0})
  }
  render(){
    return (
      <div className="container">
        <h1>Counter</h1>
        <h2>{this.state.number}</h2>
        <div>
        <Button buttonName="Increment" handleClick={this.incrementNum}/>
        <Button buttonName="Decrement" handleClick={this.decrementNum}/>
        <Button buttonName="Reset" handleClick={this.resetNum}/>
        </div>
      </div>
    )
  }
}



export default App;
