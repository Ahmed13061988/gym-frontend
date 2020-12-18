
const nullGym = {
    id: null,
    name: "",
    url: "",
    address: "",
    image_url:""
  }


const initialState = {
    
    gyms: [],
    selectedGym: nullGym
  }
  
  const gymsReducer = (state=initialState, action) => {
    switch (action.type){
        case "SET_GYMS":
         return {...state, gyms: action.payload}
        case "SET_SELECTED_GYM":
            return {...state, selectedGym: action.payload}
        case "UNSET_GYM":
         return {...state, selectedGym: nullGym}
        default: 
        return {...state}
    }
  }


  export default gymsReducer; 