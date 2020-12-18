import React from "react";
import { connect } from "react-redux";
import { toggleSignup, handleLoginForm, Signup } from '../redux/actionsCreators'

const Login = (props) => {
  
    const { signup, toggleSignup, form, handleLoginForm} = props
    const { username, password, passwordConfirmation} = form 
    const onSubmit = (e)=>{
        e.preventDefault();
        if(signup){
            if(password == passwordConfirmation){
            Signup({username: username, password: password})   
        } else{
            alert("Passwords don't match!")}
        }
    }
    console.log(form)
  return(
    <>
      <h3>{signup ? "Sign up!" : "Login!"} </h3>
      <form onSubmit={onSubmit}>
        <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleLoginForm} />
        </label><br/>
        <label>
        Password:
          <input type="password" name="password" value={password} onChange={handleLoginForm} />
        </label><br/>
        {signup &&
          <>
            <label>
        Password Confirmation: <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginForm}/>
            </label>
            <input type="submit" value="Submit" />
          </>
        }
      </form>
      <br/>
      <br/>
      <button onClick={toggleSignup}>Or... {signup ? "Login!" : "Sign up!"}</button>
    </>
  )
}


const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginForm, Signup})(Login)
