import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import SmurfCard from './SmurfCard';
import { getSmurfs } from '../actions/action'

class SmurfList extends React.Component {
    
  componentDidMount() {
    this.props.getSmurfs();
  }

  // deleteSmurf = (e, id) => {
  //   this.props.deletSmurf(id)
  // }

  render(){
    return (
        <div className="smurf-list" >
          <h2>This is the Smurf Files!</h2>
          {this.props.fetchingSmurfs ? (
            <Loader type="Circles" 
                  color="navy" 
                  height={80} 
                  width={80} 
            />) :
            <ul>{this.props.smurfs.map(smurf => {
              return (
                <SmurfCard 
                  key={smurf.id}
                  smurf={smurf}
                  //deleteSmurf=(this.deleteSmurf) 
                />
              )
            })}
           </ul>
          }
        </div>
    )
  }
} 
const mapStateToProps = state => {{
    smurfs: state.smurfs
    fetchingSmurfs
}}

export default connect (
    mapStateToProps,
    { getSmurfs }
)(SmurfList)