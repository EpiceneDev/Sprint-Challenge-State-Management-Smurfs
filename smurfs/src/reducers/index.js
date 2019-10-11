import { ADD_SMURF } from '../actions'

const initialState = { 
    smurfs: [],
    fetchingSmurfs: false,
    error: ''
}

const reducer = (state = initialState, action) => {
        switch(action.type) {
            case "ADD_SMURF":
                return { ...state, };
                default:
                    return state;
        }
}
 
export default reducer;