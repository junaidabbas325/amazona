import Axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNOUT, USER_SIGNIN_SUCCESS } from "../constants/userConstants"

export const signin = (email, password) => async (disptach) =>{
    disptach({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post('/api/users/signin', {email, password});
        disptach({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        disptach({
            type: USER_SIGNIN_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};
export const signout = () => (disptach) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    disptach({type: USER_SIGNOUT})
}