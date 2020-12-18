const BASEURL = "http://localhost:3000/"

export const like = () => ({type: "ADD_LIKE"})

export const setGyms = () => {
   
    return dispatch =>{
    fetch(BASEURL + "gyms")
    .then(res => res.json())
    .then(gyms=> dispatch({
        type: "SET_GYMS",
        payload: gyms 
    }
    ))}
}

export const setChosenGym = (id) => {
    return dispatch => {
      fetch(BASEURL + "gyms/" + id)
      .then(res => res.json())
      .then(gym => dispatch({
        type: "SET_SELECTED_GYM",
        payload: gym
      })
    )}
  }

  export const unsetGym = () => ({type: "UNSET_GYM"})

  export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

  export const handleLoginForm = (e) => ({

    type: "CHANGE_LOGIN_FORM",

    payload: {name: e.target.name, value: e.target.value }
  })

  export const Signup =(data)=>{
    return dispatch => {
     fetch(BASEURL+ "users", {
       method: "POST",
       headers: {
        "Content-Type" : "application/json"
       },
       body: json.stringify(data),
     })
     .then(res => res.json)
     .then(res => dispatch({
       type: "SET_USER",
       payload: {user:res.user}
     }))
    }

  }