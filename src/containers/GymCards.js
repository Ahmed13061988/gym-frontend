import React from 'react';
import { connect} from "react-redux";
import GymCard from "../components/GymCard"

const GymCards = (props) =>{

    return(
        <div className="cards">
            {props.gyms.map(gym => <GymCard key={gym.id} {...gym}/>)}
        </div>
    )
}

const mapStateToProps = (state) =>({
    gyms: state.gyms.gyms
})
export default connect(mapStateToProps)(GymCards);
