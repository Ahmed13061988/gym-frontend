import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setChosenGym , unsetGym } from "../redux/actionsCreators"




class GymPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setChosenGym(id)
    }

    componentWillUnmount(){
        this.props.unsetGym()
      }


    renderPage = () => {
        const {url, name, image_url, address, history} = this.props

        return (
          <>
            <h1><a href={url}>{name}</a></h1>
            <button onClick={history.goBack}>Go back!</button>
            <p><img src={image_url} alt={name}/></p>
            <p>{address}</p>
          </>
        )
      }
    
      renderSpinner = () => <div className="loader"></div>
    
      render(){
          //  console.log("render",this.props)
        return(
          <div className="show">
            {this.props.id? this.renderPage() : this.renderSpinner()}
          </div>
        )
      }
    }


const mapStateToProps = (state) => ({
    ...state.gyms.selectedGym
  })

 

export default connect(mapStateToProps,{ setChosenGym, unsetGym })(GymPage);