import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'


const SmurfForm = props => {
    console.log("FORM", props)
  const [input, setInput] = useState(null);

  const handleInput = event => {
    setInput({
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(!props.state.name || !props.state.age || !props.state.height) {
        addSmurf(input);
        setInput({
        name: '',
        age: '',
        height: ''
        });
    //props.history.push('/smurfs');}
  };

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"  onChange={handleInput} placeholder="Smurf Name" />
      <input type="text" name="age"  onChange={handleInput} placeholder="Smurf Age" />
      <input type="text" name="height"  onChange={handleInput} placeholder="Smurf Height" />
      <button type="submit">Add Smurf!</button>
    </form>
    );
}





const mapStateToProps = state => {
    return {
        smurf: {
            name: state.name,
            age: state.age,
            height: state.height,
            id: Date.now()
        }
    }
  }
export default connect(mapStateToProps, {addSmurf})(SmurfForm)
  