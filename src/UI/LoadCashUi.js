import React from 'react';
import axios from 'axios';
import PrintLoadCash from './components/PrintLoadCash';
 import {SET_LoadCash} from './redux/actions/loadAction';
 import {connect} from 'react-redux';

class LoadCashUi extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            hundreds: 0,
            five_hundreds: 0,
            thousands: 0,
        };
        this.obj = '';
        this.load = '';
        this.isCorrect = false;
    }
    componentDidMount()
    {
        this.setState({isCorrect: true});
    }
    handleSubmit = (event) =>
    {
        let {hundreds, five_hundreds, thousands} = this.state;
        if(hundreds < 0 || five_hundreds < 0 || thousands < 0)
        {
            alert("Enter a valid input... The number should be positive values");
        }
        else
        {
            const obj = JSON.stringify(this.state);
            alert("Insert succesfull");
       
            axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/load',
            data: obj,
            }).then(res=>{this.props.SET_LoadCash(res.data)});
            
        }
        
        
        event.preventDefault();
    }

    handleHundredsChange = (event) =>{
        this.setState({hundreds: event.target.value});
    }
    handleFiveHundredsChange = (event) =>{
        this.setState({five_hundreds: event.target.value})
    }
    handleThousandsChange = (event) =>{
        this.setState({thousands: event.target.value})
    }

    render()
    {
        let {isCorrect} = this.state;
       
        return (       
             
            <div className = 'loadbox'> 
                <div className = 'leftloadbox'>
                <center>
                <form onSubmit = {this.handleSubmit} className = 'load'>
                    <div>
                        <label><h5>Enter the Count of Cash</h5></label>
                    </div>
                    <div >
                        <label><h6>Hundreds</h6> </label>
                        <input type="number" value = {this.state.hundreds} onChange = {this.handleHundredsChange} className = 'inputload'></input>
                    </div>
                    <div>
                        <label><h6>Five Hundreds</h6> </label>
                        <input type="number" value = {this.state.five_hundreds} onChange = {this.handleFiveHundredsChange} className = 'inputload'></input>
                    </div>
                    <div>
                        <label><h6>Thousands</h6></label>
                        <input type="number" value = {this.state.thousands} onChange = {this.handleThousandsChange}className = 'inputload'></input>
                    </div>
                    <button type="submit" className = 'loadsubmit'>Submit</button>
                </form>
                </center>
                </div>

                <div className = 'rightloadbox'>
                    {isCorrect? <PrintLoadCash/> : ""}
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
      SET_LoadCash: (value)=>dispatch(SET_LoadCash(value)),  
         
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoadCashUi);
  
  

//export default LoadCashUi
//.then(res=>{this.setState({available_amount: res.data})});
//available_amount:{}
 //,available_amount
/* <Router>
                    <div>
                    <nav>
                        <ul className = 'loadul'>
                        <li className = 'loadli'>
                            <Link to = "/PrintLoadCash">PrintLoadATM</Link>
                        </li>
                        </ul>
                    </nav>
                    
                    <Switch>
                        
                        <Route path = '/PrintLoadCash' exact>
                            <PrintLoadCash load = {available_amount} />
                        </Route>
                    </Switch>
                    
                    </div>
                </Router> */

/*  {"hundreds_val":242,"five_hundreds_val":52,"thousands_val":26,"total_val":76200}
  <PrintLoadCash load = {JSON.stringify(available_amount)} />
{<h1>LoadCashToATM</h1>
                <Router>
                    <div>
                    <nav>
                        <ul>
                        <li>
                            <Link to = "/i">LoadCashToATM</Link>
                        </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path = '/LoadCashUi'>
                        <LoadCashUi/>
                        </Route>
                    </Switch>
                    </div>
                </Router>} */