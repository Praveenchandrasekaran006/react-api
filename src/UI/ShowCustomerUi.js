import React from 'react';
import axios from 'axios';
import PrintCustomerDetails from './components/PrintCustomerDetails';
import { SET_CustomerDetails } from "./redux/actions/loadAction";
import {connect} from 'react-redux';

class ShowCustomerUi extends React.Component
{
    componentDidMount()
    {
        let obj = JSON.stringify({auth: 'hello'});
        axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/show',
            data: obj,
        }).then(res=>{this.props.SET_CustomerDetails(res.data)})
        .catch(function(error){
            if(error.response.status === 500)
               alert("An error Occured in Machine");
        });  
    }

    render()
    {
        return (
            <div className = 'loadbox'>
              <PrintCustomerDetails/>
            </div> 
        );
    }
}

const mapStateToProps= (state) =>{
    return {
        loadReducer : state.loadReducer,
    }
  }
  
  //Updating Props
  const mapDispatchToProps = (dispatch) =>{ //for updating data
    return {
        SET_CustomerDetails: (value)=>dispatch(SET_CustomerDetails(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowCustomerUi);

//export default ShowCustomerUi
//.then(res=>{this.setState({customer_details: res.data})});