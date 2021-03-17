//import { render } from '@testing-library/react';
import React from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";
import {connect} from 'react-redux';

class PrintCustomerDetails extends React.Component 
{
  render()
  {
      let shows = this.props.loadReducer.customer_details;
      const columns = [{ Header: 'Account Number',accessor: 'acc_no' },{ Header: 'Account Holder',accessor: 'acc_holder' },{ Header: 'Pin Number',accessor: 'pin_no' },{ Header: 'Account Balance',accessor: 'acc_balance' }];
      return(
        <div >
          <center><h3>Customer Details</h3>
            <h6><ReactTable data = {shows} columns = {columns} defaultPageSize = {5} className = 'reacttable'/></h6> </center>
        </div>
      );
    }
};

const mapStateToProps= (state) =>{
  return {
      loadReducer : state.loadReducer,
  }
}

export default connect(mapStateToProps)(PrintCustomerDetails);

//export default PrintCustomerDetails

/* {shows.map((show) => (
            <div >
              <div >
                <p>{show.acc_no} {show.acc_holder} {show.pin_no} {show.acc_balance}</p>
              </div>
            </div>
          ))}  */




      /* <p>{JSON.stringify(shows[0])}</p>
      <p>{shows.acc_no}</p>
      <p>{length}</p>  */
/*       
              <div >
              <div >
                <p >{shows[0].acc_no}</p>
                <p >{shows[0].acc_holder}</p>
                <p >{shows[0].pin_no}</p>
                <p >{shows[0].acc_balance}</p>
              </div>
            </div>    */
         
    /* {Object.keys(load).map((key,i) => (<p key = {i}>
      <span> key name: {key}</span>
      <span>value: {load[key]}</span>
      </p>)
    )} */



      /* {
        load.map((key) => load[key])
      } */
       
            /* <center><h1>Load cash</h1></center>
      {load.map((lo) => (
            <div >
              <div >
                <h5 >{lo.hundreds_val}</h5>
                <h6 >{lo.five_hundreds_val}</h6>
                <p >{lo.thousands_val}</p>
                <p >{lo.total_val}</p>
              </div>
            </div>
          ))} */