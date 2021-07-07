import { FETCH_SMURFS_DATA_START, FETCH_SMURFS_DATA_SUCCESS, FETCH_SMURFS_DATA_FAILURE } from '../actions';
import { ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';


const initialState = { 
    smurfs: [],
    fetchingSmurfs: false,
    error: ''
}

const reducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_SMURFS_DATA_START:
                return {
                    ...state,
                    fetchingSmurfs: true,
                    error: ''
                };
            case FETCH_SMURFS_DATA_SUCCESS:
                return {
                    ...state,
                    fetchingSmurfs: false,
                    error: '',
                    smurfs: action.payload
                };
            case FETCH_SMURFS_DATA_FAILURE:
                return {
                    ...state,
                    fetchingSmurfs: false,
                    error: action.payload
                };
            case ADD_SMURF_START:
                return {
                    ...state,
                    addingSmurf: true,
                    error: ''
                };
            case ADD_SMURF_SUCCESS:
                return {
                    ...state,
                    addingSmurf: false,
                    error: '',
                    smurfs: [...action.payload]
                };
            case ADD_SMURF_FAILURE:
                return {
                    ...state.smurfs,
                    addingSmurf: false,
                    error: action.payload
                };
            default:
                return state;
        };
};
 
export default reducer;