import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


const AddSmurf = props => {
    let [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});


    const handleInput = event => {
        setNewSmurf({
          ...newSmurf,
          [event.target.name]: event.target.value
        });
      };

    const onSubmit = e => {
        props.addSmurf(newSmurf);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name"  onChange={handleInput} placeholder="Smurf Name" />
            <input type="text" name="age"  onChange={handleInput} placeholder="Smurf Age" />
            <input type="text" name="height"  onChange={handleInput} placeholder="Smurf Height" />
            <button type="submit">Add Smurf!</button>
        </form>
    );
};


export default connect(null, {addSmurf})(AddSmurf);