import React, { Component} from "react";
import { connect } from "react-redux";
import { setChosenGym } from "../redux/actionsCreators"




class GymPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setChosenGym(id)
        console.log("im here",setChosenGym)
    }


    renderPage = () => {
        const { url, name, image_url, address, history } = this.props
        return (
          <>
            <h1><a href={ url }>{ name }</a></h1>
            <button onClick={ history.goBack }>Go back!</button>
            <p><img src={ image_url } alt={ name }/></p>
            <p>{ address }</p>
          </>
        )
      }
    
      renderSpinner = () => <div className="loader"></div>
    
      render(){
        return(
          <div className="show">
            {this.props.id ? this.renderPage() : this.renderSpinner()}
          </div>
        )
      }
    }


const mapStateToProps = (state) => ({
    ...state.gyms.neededGym
  })

export default connect( mapStateToProps, { setChosenGym  })(GymPage)