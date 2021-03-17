import React from 'react';
import axios from 'axios';
import {SET_AccountBalance} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';
//import loadReducer from './'
import {connect} from 'react-redux';

class CheckBalance extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            
            isCorrect: false
        };
    }

    componentDidMount()
    {
        let obj = JSON.stringify({auth: 'hello'});
        axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/check',
            data: obj,
        }).then(res=>{this.props.SET_AccountBalance(res.data)});
        this.setState({isCorrect: true});
    }
    //then(res=>{this.setState({acc_balance: res.data})});
    render()
    {
        let {isCorrect} = this.state;
        return (
            <div>
                
                <h5>The Balance Amount is... {isCorrect ? JSON.stringify(this.props.loadReducer.acc_balance.balance) : ""} </h5>
                
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
        SET_AccountBalance: (value)=>dispatch(SET_AccountBalance(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CheckBalance);
//export default CheckBalance