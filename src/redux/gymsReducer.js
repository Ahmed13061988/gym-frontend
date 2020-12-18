
const initialGymState = {
    gyms: []
  }
  
  const gymsReducer = (state = initialGymState, action) =>{
      console.log("here", state)
    switch (action.type){
        case "SET_GYMS":
         return {...state, 
        gyms: action.payload}
        default: 
        return {...state}
    }
  }


  export default gymsReducer; 