import { FETCH_SMURFS_DATA_START, FETCH_SMURFS_DATA_SUCCESS, FETCH_SMURFS_DATA_FAILURE } from '../actions';

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
            default:
                return state;
        };
};
 
export default reducer;