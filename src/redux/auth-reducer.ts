import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA="samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES ="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType = {
    userId: number|null,
    email: string|null,
    login: string|null,
    isAuth: boolean,
    captchaUrl: string|null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer =(state=initialState, action:any):InitialStateType=>{
    switch(action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCES:
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType={
    userId: number,
    email: number,
    login: number,
    isAuth: number
}

type SetAuthUserDataActionType={
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData=(userId: number, email:string, login:string, isAuth:boolean):SetAuthUserDataActionType=>({type:SET_USER_DATA, payload:{userId, email, login,isAuth}});

export const getCaptchaUrlSuccess=(captchaUrl)=>({type:GET_CAPTCHA_URL_SUCCES, payload: {captchaUrl}})

export const getAuthUserData=()=>async(dispatch)=>{
    
    let response=await authAPI.me();
    
       if (response.data.resultCode === 0){
            let {id, login, email}= response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

    export const getCaptchaUrl =()=>async (dispatch)=>{

        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
dispatch(getCaptchaUrlSuccess(captchaUrl));
        
    }

export const login=(email,password,rememberMe, captcha)=>async(dispatch)=>{
     
     let response=await authAPI.login(email,password,rememberMe, captcha);
    
       if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }
      else{
            if (response.data.resultCode === 10){
dispatch(getCaptchaUrl());
            }
            let message=response.data.messages.length > 0 ? response.data.messages[0]:"Some error";
            dispatch(stopSubmit("login",{_error: "Common error"}))
        }
    }

export const logout=()=>async(dispatch)=>{
   let response=await authAPI.logout();
    
       if (response.data.resultCode === 0){
            dispatch(getAuthUserData(null,null,null,false))
        }
    }


export default authReducer;