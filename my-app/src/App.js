import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home'
import Listing from './cmp/Listing'
import About from './cmp/Listing'
import { render } from '@testing-library/react';

/*import Auth from './cmp/Auth'*/

function App() {
  return (
    <div>
      <Welcome/>
      <First/>
      <Last/>
      <Raddey/>
      <Country/>
      <Check/>
      <Hindi/>
      <German/>
      <NameForm/>
      
      
      
      
      
      
    </div>
  );
}
class Welcome extends React.Component{
  render(){
    return (
      <div>
        <h1> THIS IS MY FIRST PROJECT ON REACT JS</h1>
      </div>
    )

  }
}
/*class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>{this.state.username} {this.state.age}</h1>
      Enter first name:<input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      /><br/>
      Enter Last name:<input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}*/
/*
class FormData extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    return (
      <form>
        <label>
          Enter First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
          Enter Last Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        
      </form>
    )
  }
}*/
class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event){
    const url ='http;//localhost;3001/';
    fetch(url)
    .then((response) => {
      return response.json();
    });
    this.setState({value:event.target.value})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Country :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="India">IND</option>
            <option value="US">US</option>
            <option value="PK">Pk</option>
          </select>
        </label>
      </form>
    );
  }
}

class Raddey extends React.Component {
  
  setGender(event) {
    console.log(event.target.value);
  }
  handleChange(event){
    const url ='http;//localhost;3001/';
    fetch(url)
    .then((response) => {
      return response.json();
    });
    this.setState({value:event.target.value})
  }

  render() {
    return ( 
      <div onChange={this.setGender.bind(this)}>
        Select Gender:<input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
     )
  }
}
 
class Check extends React.Component{
state = { acceptedAgreement: false };

handleAcceptAgreementChange = (e) => {
  const acceptedAgreement = e.target.checked;
  this.setState({ acceptedAgreement });
};
handleChange(event){
  const url ='http;//localhost;3001/';
  fetch(url)
  .then((response) => {
    return response.json();
  });
  this.setState({value:event.target.value})
}

render() {
  return (
    <form>
      <label>Select Language:
          ENG<input
          checked={this.state.acceptedAgreement}
          onChange={this.handleAcceptAgreementChange}
          type="checkbox" />
          
      </label>
    </form>
  );
}
}

class Hindi extends React.Component{
state = { acceptedAgreement: false };

handleAcceptAgreementChange = (e) => {
  const acceptedAgreement = e.target.checked;
  this.setState({ acceptedAgreement });
};
handleChange(event){
  const url ='http;//localhost;3001/';
  fetch(url)
  .then((response) => {
    return response.json();
  });
  this.setState({value:event.target.value})
}


render() {
  return (
    <form>
      <label>
      &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  Hindi<input
          checked={this.state.acceptedAgreement}
          onChange={this.handleAcceptAgreementChange}
          type="checkbox" />
          
      </label>
      
    </form>
  );
}
}

class German extends React.Component{
state = { acceptedAgreement: false };

handleAcceptAgreementChange = (e) => {
  const acceptedAgreement = e.target.checked;
  this.setState({ acceptedAgreement });
};
handleChange(event){
  const url ='http;//localhost;3001/';
  fetch(url)
  .then((response) => {
    return response.json();
  });
  this.setState({value:event.target.value})
}

render() {
  return (
    <form>
      <label>
      &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;germun<input
          checked={this.state.acceptedAgreement}
          onChange={this.handleAcceptAgreementChange}
          type="checkbox" />
          
      </label>
    </form>
  );
}
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(event){
    const url ='http;//localhost;3001/';
    fetch(url)
    .then((response) => {
      return response.json();
    });
    this.setState({value:event.target.value})
  }
  handleChange(event){
    const url ='http;//localhost;3001/';
    fetch(url)
    .then((response) => {
      return response.json();
    });
    this.setState({value:event.target.value})
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class Last extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('form submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(event){
    const url ='http;//localhost;3001/';
    fetch(url)
    .then((response) => {
      return response.json();
    });
    this.setState({value:event.target.value})
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter first name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('form submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Last name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}





export default App;
