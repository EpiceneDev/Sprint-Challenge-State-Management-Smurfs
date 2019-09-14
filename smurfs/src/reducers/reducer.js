import { ADD_SMURF } from '../actions/action'

const initialState = { 
    smurfs: [],
}

export const reducer = (state = initialState, action) => {
        switch(action.type) {
            case "ADD_SMURF":
                return { ...state, };
                default:
                    return state;
        }
      }
      


