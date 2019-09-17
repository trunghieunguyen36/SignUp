import * as Types from '../constants/actionTypes';

export const signUp = (info) => {
    return {
        type: Types.SIGN_UP_REQUEST,
        payload: info
    }
}

export const signUpSuccess = (data) => {
    return {
        type: Types.SIGN_UP_REQUEST_SUCCESS,
        payload: data
    }
}

export const signUpError = () => {
    return {
        type: Types.SIGN_UP_REQUEST_ERROR
    }
}
