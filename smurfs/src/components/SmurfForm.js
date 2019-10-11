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
    if(!props.state.name || !props.state.age || !props.state.height) return;
    props.addSmurf(input);
    setInput({
      name: '',
      age: '',
      height: ''
    })
    //props.history.push('/smurfs');
  };

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={input} onChange={handleInput} />
      <input type="text" name="age" value={input} onChange={handleInput} />
      <input type="text" name="height" value={input} onChange={handleInput} />
      <button type="submit">Add Smurf!</button>
    </form>
    );
}





const mapStateToProps = state => {
    return {
      name: state.name,
      age: state.age,
      height: state.height
    }
  }
export default connect(mapStateToProps, {addSmurf})(SmurfForm)
  