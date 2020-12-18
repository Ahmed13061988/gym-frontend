import React, { Component} from "react";
import { connect } from "react-redux";



class GymPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
    }

    render(){

        return(
            <div>

            </div>
        )
    }
}

export default connect()(GymPage)