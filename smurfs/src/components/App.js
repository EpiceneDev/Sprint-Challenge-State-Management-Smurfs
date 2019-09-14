import React, { useReducer } from "react";
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import  reducer  from '../reducers/reducer';
import SmurfList from './SmurfList';


import "./App.css";

function App() {
  // This is setting our state to our reducer
  const [state, dispatch] = useReducer(reducer);

  // This is adding a Smurf to our state
  const addSmurf = item => dispatch({ type: "ADD_SMURF", payload: item });


  return (
    <div className="App">
      <SmurfForm addSmurf={addSmurf} /> */}
      <SmurfList 
        Smurfs={state.smurfs}
      /> 
    </div>
  );
}


export default App;
