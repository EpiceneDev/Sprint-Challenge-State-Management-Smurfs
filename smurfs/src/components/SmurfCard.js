import React from 'react';

export default SmurfCard = (props) => {
    return (
        <div className="smurf-card">
            <li>{props.smurf.name}</li>
            <li>{props.smurf.age}</li>
            <li>{props.smurf.height}</li>
            <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>
                Add Smurf!
            </button>
            </li>
        </div>
    )
}