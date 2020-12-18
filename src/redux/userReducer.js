
const initialFormState = {
    username: "",
    password:"",
    passwordConfirmation:""
}

const initialState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialFormState
  }
  
  const userReducer = (state=initialState, action) => {
    switch (action.type){
      case "TOGGLE_SIGNUP":
        return {...state, signup: !state.signup}
        case "CHANGE_LOGIN_FORM":
        return {...state, loginForm:{
            ...state.loginForm,
            [action.payload.name]: action.payload.value
        }}
      default:
        return {...state}
    }
  }
  
  export default userReducer