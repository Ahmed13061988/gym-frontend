
const nullGym = {
    id: null,
    name: "",
    url: "",
    address: ""
  }


const initialState = {
    sGym: nullGym,
    gyms: []
  }
  
  const gymsReducer = (state=initialState, action) => {
      console.log("here", state)
    switch (action.type){
        case "SET_GYMS":
         return {...state, gyms: action.payload}
        case "SET_NEEDED_GYM":
            return {...state, sGym: action.payload}
        case "UNSET_GYM":
         return {...state, sGym: nullGym}
        default: 
        return {...state}
    }
  }


  export default gymsReducer; 