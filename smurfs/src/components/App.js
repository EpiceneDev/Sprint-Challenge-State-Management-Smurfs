import React from "react";
//import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
//import reducer from '../reducers'


import "./App.css";

function App() {
  

  // This is adding a Smurf to our state
  //const addSmurf = item => dispatch({ type: "ADD_SMURF", payload: item });


  return (
    <div className="App">
      <SmurfForm />
      <SmurfList /> 
    </div>
  );
}


export default App;
