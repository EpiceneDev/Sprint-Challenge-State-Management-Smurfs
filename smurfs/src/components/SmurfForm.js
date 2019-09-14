import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/action'


class SmurfForm extends Component {
  const [input, setInput] = useState("");

  const handleInput = event => {
    this.setState({
      [e.target.name]: event.target.value
    )};
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(!this.state.name || !this.state.age || !this.state.height) return;
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
    // this.props.history.push('/smurfs');
  };

  render() {
    return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={this.state.name} onChange={handleInput} />
      <input type="text" name="age" value={this.state.age} onChange={handleInput} />
      <input type="text" name="height" value={this.state.height} onChange={handleInput} />
      <button type="submit">Add Smurf!</button>
    </form>
    );
  }
}




const mapStateToProps = state => {
    return {
      smurf: state.smurf
    }
  }
export default connect(mapStateToProps, {})(SmurfForm)
  