import './App.css';
import React, {Component} from 'react';
import LoadCashUi from './UI/LoadCashUi';
import ShowCustomerUi from './UI/ShowCustomerUi';
import AtmOperations from './UI/AtmOperations';
import atmlogo from './atmlogo.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';

class App extends Component{
  
  render()
  {
    return (


    <div >
   
      <center><h2 className = 'atm'>ATM</h2></center>
      
      <Router>
        <div>

          <header className = 'display: flex'>
            <nav >
              <ul className = 'ul'>
                <li className = 'li'>
                  <Link to = "/">Home</Link>
                </li>
                <li className = 'li'>
                  <Link  to = "/LoadCashUi">Load Cash To ATM</Link>
                </li>
                <li className = 'li'>
                  <Link  to = "/ShowCustomerUi">Show Customer Details</Link>
                </li>
                <li className = 'li'>
                  <Link  to = "/AtmOperations">Atm Operations</Link>
                </li>
                <li className = 'li'>
                  <img src={atmlogo} alt="Logo" className = 'Logo'  ></img>
                </li>
              </ul>
            </nav>
          </header>
        </div>
          
        <div className = "Image">  
          <Switch >
            <Route path = '/' Component = {Home} exact>
              <Home/>
            </Route>
            <Route path = '/LoadCashUi' Component = {LoadCashUi} exact>  
              <LoadCashUi/>
            </Route>       
            <Route path = '/ShowCustomerUi' Component = {ShowCustomerUi} exact>  
              <ShowCustomerUi/>
            </Route>    
            <Route path = '/AtmOperations' Component = {AtmOperations} exact>  
              <AtmOperations/>
            </Route>  
          </Switch>
        </div>
      
      </Router>
            
    </div> 
    
    );
  }
}

export default App;

//{<div>  <LoadCashUi/>    </div>} 
/*
import './App.css';
import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component{

  state = {
    contacts: []
  };
  
  componentDidMount()
  {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data})
    })
    .catch(console.log)
  }
  
  render()
  {
    return (
      <div><Contacts contacts = {this.state.contacts}/></div>
       
    );
  }
}

export default App;
*/
