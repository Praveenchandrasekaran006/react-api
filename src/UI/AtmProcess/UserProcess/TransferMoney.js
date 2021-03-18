import React from 'react';
import axios from 'axios';
import {SET_TransferMoney} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';
import {connect} from 'react-redux';
class TransferMoney extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            receive_acc_no: 0,
            amount: 0,
        };
    }

    handleSubmit = (event) =>
    {
        let {receive_acc_no, amount} = this.state;
        let receive_length = receive_acc_no.toString().length;
        if(receive_length !== 3)
        {
            alert("The Account Number should be a 3 digit Number");
        }
        else if(amount < 1000 || amount > 10000 )
        {
            alert("Enter amount in the range of (1000 - 10,000)");   
        }
        else if(amount % 100 !== 0)
        {
            alert("Enter amount in multiples of 100");
        }
        else
        {
            const obj = JSON.stringify(this.state);
            axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/transfer',
            data: obj,
            }).then(res=>{this.props.SET_TransferMoney(res.data)})
            .catch(function(error){
                if(error.response.status === 101)
                    alert("Insufficient account Balance");
                else if(error.response.status === 404)
                    alert("Cannot Transfer!! Enter the amount within 100 - 10000");
                else if(error.response.status === 405)
                    alert("Invalid Receiver Credentials");
                else if(error.response.status === 407)
                    alert("Enter amount in multiples of 10");
                else if(error.response.status === 500)
                   alert("An error Occured in Machine");
            });
        }
        
        
        event.preventDefault();
    }

    handleReceiveAccountChange = (event) =>{
        this.setState({receive_acc_no: event.target.value});
    }
    handleAmountChange = (event) =>{
        this.setState({amount: event.target.value});
    }
    

    render()
    {
        let {receive_acc_no, amount} = this.state;
        return (          
            <div>  
                <div className = 'lefttransferbox'>
                <center>
                    <form onSubmit = {this.handleSubmit} className = 'load'>
                        <div>
                            <label>Enter the Receiver's Account Number </label>
                            <input type="number" value = {receive_acc_no} onChange = {this.handleReceiveAccountChange} className = 'inputload'></input>
                        </div>
                        <div>
                            <label>Enter the Amount To Be Transfered </label>
                            <input type="number" value = {amount} onChange = {this.handleAmountChange} className = 'inputload'></input>
                        </div>
                        <button type="submit" className = 'loadsubmit'>Submit</button>
                    </form>
                </center>
                </div>
                <div className = 'righttransferbox'><h6>The Balance amount is {this.props.loadReducer.sender_balance.acc_balance}</h6></div>
                
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
        SET_TransferMoney: (value)=>dispatch(SET_TransferMoney(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TransferMoney);

//isCorrect? (): ""
//export default TransferMoney
//this.setState({balance_amount: res.data})

    // componentDidMount()
    // {
    //     this.setState({isCorrect: true})
    // }