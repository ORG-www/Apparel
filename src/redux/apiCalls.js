import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const register = async (user) => {
  try {
    const response = await publicRequest.post("/auth/register", user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};




export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

