import React from 'react';
import axios from 'axios';
import ValidateAccountPin from './AtmProcess/ValidateAccountPin';
import {connect} from 'react-redux';
import { SET_Validation } from './redux/actions/loadAction';

class AtmOperations extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            acc_no: 0,
            pin_no: 0,
        };
    }
    
    handleSubmit = (event) =>
    {       
        let {acc_no, pin_no} = this.state;
        let acc_no_length = acc_no.toString().length;
        let pin_no_length = pin_no.toString().length;

        if(acc_no_length !== 3)
            alert("The account should be a 3 digit number");
        else if(pin_no_length !== 4)
            alert("The pin number should be a 4 digit number");
        else
        {   
            const obj = JSON.stringify(this.state);
            axios({
            method: 'post', 
            url: 'http://localhost:8080/atmprocesswebapplication/accountpin',
            data: obj,
            }).then(res=>{ 
                this.props.SET_Validation(res.data)
            }).catch(function(error){
                     if(error.response.status === 401)
                        alert("Invalid Account Number"); 
                     else if(error.response.status === 400)
                         alert("Invalid Pin Number");
                   else if(error.response.status === 500)
                        alert("An error Occured in Machine");
                 });  
        }
        
        event.preventDefault();
    }

    handleAccountChange = (event) =>{
        this.setState({acc_no: event.target.value});
    }
    handlePinChange = (event) =>{
        this.setState({pin_no: event.target.value})
    }
    

    render()
    {    
        return (  
        
            <div className = 'loadbox'> 

                <div className = 'leftloginbox'>
                    <center>
                    <form onSubmit = {this.handleSubmit} className = 'load'>
                        <div>
                        <label><h5>Login</h5></label>
                        </div>
                        <div>
                            <label>Enter Account Number </label>
                            <input type="number" name = 'acc_no' value = {this.state.acc_no} onChange = {this.handleAccountChange} className = 'inputload'></input>
                        </div>
                        <div>
                            <label>Enter Pin Number </label>
                            <input type="number" value = {this.state.pin_no} onChange = {this.handlePinChange} className = 'inputload'></input>
                        </div>
                        <button type="submit" className = 'loadsubmit'>Submit</button>
                    </form>
                    </center>
                </div>
                
                <div className = 'rightloginbox'>
                    <ValidateAccountPin/> 
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
      SET_Validation: (value)=>dispatch(SET_Validation(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AtmOperations);

  
// output = {JSON.stringify(validate)}
// let {isCorrect} = this.state;
//export default AtmOperations

//    componentDidMount()
//    {
//         this.setState({isCorrect: true});
//    }
// {isCorrect ? : ""}
//import PrintLoadCash from './components/PrintLoadCash';
// .then(res=>{this.setState({validate: res.data})}).catch(function(error){
//     if(error.response.status === 401)
//         alert("Invalid Account Number");
//     else if(error.response.status === 400)
//         alert("Invalid Pin Number");
//     else if(error.response.status === 500)
//         alert("A")
// }); 