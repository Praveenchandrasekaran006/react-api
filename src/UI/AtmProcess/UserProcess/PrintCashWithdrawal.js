import React from 'react'
import {connect} from 'react-redux';

class PrintCashWithdrawal extends React.Component 
{
  render()
  {
    let cash = this.props.loadReducer.balance_amount;
    return(
      <div>
        <h5>The Cash Withdrawn are...</h5>
              <div >
                <div >
                  <h6>Hundreds Count: {cash.hundreds_count}</h6>
                  <h6>Five Hundreds Count: {cash.five_hundreds_count}</h6>
                  <h6>Thousands Count: {cash.thousands_count}</h6>
                  <h6>Accout Balance: {cash.acc_balance}</h6>
                </div>
              </div>  
      </div>
    )
  }
};

const mapStateToProps= (state) =>{
  return {
      loadReducer : state.loadReducer,
  }
}

export default connect(mapStateToProps)(PrintCashWithdrawal);
//export default PrintCashWithdrawal