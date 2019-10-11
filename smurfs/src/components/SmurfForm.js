import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


const AddSmurf = props => {
    let [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});


    let onSubmit = e => {
        e.preventDefault();
        addSmurf();
    }

    const onChange = e => {
        let {name, value} = e.target;
        setNewSmurf({
            ...newSmurf,
            [name]: value
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name"  onChange={onChange} placeholder="Smurf Name" />
            <input type="text" name="age"  onChange={onChange} placeholder="Smurf Age" />
            <input type="text" name="height"  onChange={onChange} placeholder="Smurf Height" />
            <button type="submit">Add Smurf!</button>
        </form>
    );
};


export default connect(null, {addSmurf})(AddSmurf);