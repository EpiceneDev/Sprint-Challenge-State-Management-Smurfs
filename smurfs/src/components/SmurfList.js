import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import SmurfCard from './SmurfCard';
import { getSmurfs, addSmurf } from '../actions';

const SmurfList = props => {
    
  useEffect(() => {
    props.getSmurfs();
  }, []);

  // useEffect(() => {
  //   props.deleteSmurf();
  // }, [deleteSmurf])

    return (
        <div className="smurf-list" >
          <h2>This is the Smurf Files!</h2>
          {props.fetchingSmurfs ? (
            <Loader type="Circles" 
                  color="navy" 
                  height={80} 
                  width={80} 
            />) :
            <ul>{props.smurfs.map(smurf => {
              return (
                
                  <SmurfCard 
                  key={smurf.id}
                  smurf={smurf}
                  // // deleteSmurf={deleteSmurf}
                  />
                
              )
            })}
           </ul>
          }
        </div>
    )
  }

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
}}

export default connect (mapStateToProps, { getSmurfs, addSmurf })(SmurfList)