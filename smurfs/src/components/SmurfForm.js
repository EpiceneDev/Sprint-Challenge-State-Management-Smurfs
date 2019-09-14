import React, { useState } from 'react';
import { connect } from 'react-redux';


function SmurfForm(props) {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Smurf" value={input} onChange={handleChanges} />
      <button type="submit">Add Smurf!</button>
    </form>
  );
}




const mapStateToProps = state => {
    return {
      smurf: state.smurf
    }
  }
export default connect(mapStateToProps, {})(SmurfForm)
  