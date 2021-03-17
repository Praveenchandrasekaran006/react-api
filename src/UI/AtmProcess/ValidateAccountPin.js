import React from 'react';
import _ from 'lodash';
import CheckBalance from './UserProcess/CheckBalance';
import CashWithdrawal from './UserProcess/CashWithdrawal';
import TransferMoney from './UserProcess/TransferMoney';
import MiniStatement from './UserProcess/MiniStatement';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {connect} from 'react-redux';
//import { render } from '@testing-library/react';

function CorrectInput()
{
    return(
        <div>
            <Router>
              <div>
              <nav>
                  <ul className = 'ul'>
                      <li className = 'validateli'>
                          <Link  to = "/CheckBalance" >CheckBalance</Link>
                      </li>
                      <li className = 'validateli'>
                          <Link  to = "/CashWithdrawal">CashWithdrawal</Link>
                      </li>
                      <li className = 'validateli'>
                          <Link  to = "/TransferMoney">TransferMoney</Link>
                      </li>
                      <li className = 'validateli'>
                          <Link  to = "/MiniStatement">MiniStatement</Link>
                      </li>
                  </ul>
              </nav>

            <Switch>
              <Route path = '/CheckBalance' Component = {CheckBalance} exact>  
                <CheckBalance/>
              </Route>       
              <Route path = '/CashWithdrawal' Component = {CashWithdrawal} exact>  
                <CashWithdrawal/>
              </Route>    
              <Route path = '/TransferMoney' Component = {TransferMoney} exact>  
                <TransferMoney/>
              </Route>
              <Route path = '/MiniStatement' Component = {MiniStatement} exact>  
                <MiniStatement/>
              </Route>  
            </Switch>
          </div>
      </Router>
        </div>
    );
}

class ValidateAccountPin extends React.Component 
{
    
    render()
    {
      let output1 = JSON.stringify({"output":1});
      console.log(this.props.loadReducer.validate_output);
      return(
          <div>{_.isEqual(JSON.stringify(this.props.loadReducer.validate_output),output1)? <CorrectInput/>: ""} </div>
          );
    }
    
}

const mapStateToProps= (state) =>{
  return {
      loadReducer : state.loadReducer,
  }
}

export default connect(mapStateToProps)(ValidateAccountPin);
//export default ValidateAccountPin



// return(
//     <div>
//       <center><h1>Load Cash</h1></center>
//       <h3>{props.output}</h3>
//             {/* <div >
//               <div >
//                 <h5 >{load["hundreds_val"]}</h5>
//                 <h6>{load.five_hundreds_val}</h6>
//                 <p>{load.thousands_val}</p>
//                 <p>{load.total_val}</p>
//               </div>
//             </div> */}
//     </div>
//   );