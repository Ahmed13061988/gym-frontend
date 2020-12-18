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