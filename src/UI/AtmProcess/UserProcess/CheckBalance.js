import React from 'react';
import axios from 'axios';
import {SET_AccountBalance} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';
import {connect} from 'react-redux';

class CheckBalance extends React.Component
{
    componentDidMount()
    {
        axios({
            method: 'get',
            url: 'http://localhost:8080/atmprocesswebapplication/check',
        }).then(res=>{this.props.SET_AccountBalance(res.data)});
    }
    
    render()
    {
        return (
            <div>
                <h5>The Balance Amount is... {this.props.loadReducer.acc_balance.balance} </h5>
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
//let {isCorrect} = this.state;
//isCorrect ? JSON.stringify() : ""
//let obj = JSON.stringify({auth: 'hello'});
//data: obj,
//this.setState({isCorrect: true});
//then(res=>{this.setState({acc_balance: res.data})});
// constructor()
//     {
//         super();
//         this.state ={
            
//             //isCorrect: false
//         };
//     }