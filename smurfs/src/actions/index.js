import axios from "axios";

export const FETCH_SMURFS_DATA_START = "FETCH_SMURFS_DATA_START";
export const FETCH_SMURFS_DATA_SUCCESS = "FETCH_SMURFS_DATA_SUCCESS";
export const FETCH_SMURFS_DATA_FAILURE = "FETCH_SMURFS_DATA_FAILURE";

export const getSmurfs = () => dispatch => {

    return dispatch => {
        dispatch({ type: FETCH_SMURFS_DATA_START });
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log("GET Request Response: ", res);
                dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err });
            });
    };
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF_START })
    axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then(res => {
                console.log("GET Request Response: ", res);
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res });
            })
            .catch(err => {
                dispatch({ type: ADD_SMURF_FAILURE, payload: err });
            });
}