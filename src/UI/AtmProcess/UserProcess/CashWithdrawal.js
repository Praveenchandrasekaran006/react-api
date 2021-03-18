import React from 'react';
import axios from 'axios';
import PrintCashWithdrawal from './PrintCashWithdrawal';
import {SET_CashWithdrawal} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';
import {connect} from 'react-redux';
class CashWithdrawal extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            amount: 0,
        };
    }

    handleSubmit = (event) =>
    {
        let {amount} = this.state;
        if(amount < 100 || amount > 10000)
        {
            alert("Enter amount in the range of (100 - 10,000)");
        }
        else if(amount % 100 !== 0)
        {
            alert("Enter the amount in multiples of hundreds");
        }
        else
        {
            const obj = JSON.stringify(this.state);
            axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/withdraw',
            data: obj,
            }).then(res=>{this.props.SET_CashWithdrawal(res.data)});
        }
        
        
        event.preventDefault();
    }

    handleAmountChange = (event) =>{
        this.setState({amount: event.target.value});
    }
    

    render()
    {
        let {amount} = this.state;
        return (    
            <div>      
            <div className = 'leftwithdrawalbox'>  
            <center>
                <form onSubmit = {this.handleSubmit} className = 'load'>
                    <div>
                        <label>Enter the Amount To Be Withdrawn </label>
                        <input type="number" value = {amount} onChange = {this.handleAmountChange} className = 'inputload'></input>
                    </div>
                    <button type="submit" className = 'loadsubmit'>Submit</button>
                </form>
            </center>
            </div>
                <div className = 'rightWithdrawalbox'>
                    <PrintCashWithdrawal/>
                </div>
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
        SET_CashWithdrawal: (value)=>dispatch(SET_CashWithdrawal(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CashWithdrawal);

//export default CashWithdrawal
//this.setState({balance_amount: res.data})
//isCorrect ? () : ""
 // isCorrect: true
  // componentDidMount()
    // {
    //     this.setState({isCorrect: true});
    // }