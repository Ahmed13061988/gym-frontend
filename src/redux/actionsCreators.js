const BASEURL = "http://localhost:3000/"

export const like = () => ({type: "ADD_LIKE"})

export const setGyms = () => {
   
    return dispatch =>{fetch(BASEURL + "gyms")
    .then(res => res.json())
    .then(gyms=> dispatch({
        type: "SET_GYMS",
        payload: gyms 
    }
    ))}
}