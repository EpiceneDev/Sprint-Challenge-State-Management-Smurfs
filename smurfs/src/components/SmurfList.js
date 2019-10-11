import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import SmurfCard from './SmurfCard';
import { getSmurfs } from '../actions'

const SmurfList = props => {
    
  useEffect(() => {
    this.props.getSmurfs();
  }, []);

  if(props.isFetching) {
    return <h2>Loading...</h2>
};

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

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
}}

export default connect (mapStateToProps,{ getSmurfs })(SmurfList)