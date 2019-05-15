
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return{ ...state, fetching: true};
    case FETCH_SUCCESS:
      return{
        ...state, 
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    case FETCH_FAILED:
      return{...state,fetching: false,  error: action.payload};
    default:
      return state;
  }
};
