import * as Types from '../constants/actionTypes';

const initialState = {
  authUser: sessionStorage.getItem("USER") ? JSON.parse(sessionStorage.getItem("USER")) : null
}

export default function AuthReducer(state=initialState, action) {

  const { payload } = action;

  switch (action.type) {
    case Types.SIGN_UP_REQUEST_SUCCESS: {
      return {
        ...state,
        authUser: payload
      }
    }
    default:
      return state;
  }
}
