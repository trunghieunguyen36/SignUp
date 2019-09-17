import axios from 'axios'
import { SIGN_UP } from '../../../constants/apiUrl';

const signUpFromApi = async (data) => {
  console.log(data)
    const request = await axios({
        method: 'post',
        url: SIGN_UP,
        data
    })
    console.log(request);
    return request;
}

export const API = {signUpFromApi}
