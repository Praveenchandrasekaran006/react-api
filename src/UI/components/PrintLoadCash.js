import React from 'react'
import {connect} from 'react-redux';
//import loadReducer from '../redux/reducers/loadReducer';
class PrintLoadCash extends React.Component{
  
  render()
  {
    let load = this.props.loadReducer.available_amount;
    return(
      <div>
        
        <center><h5>Total Amount in ATM</h5>
              <div >
                <div >
                  <h6>Hundreds Count: {load.hundreds_val}</h6>
                  <h6>Five Hundreds Count: {load.five_hundreds_val}</h6>
                  <h6>Thousands Count: {load.thousands_val}</h6>
                  <h6>Total Amount: {load.total_val}</h6>
                </div>
              </div>  
              </center>
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
  return {
      loadReducer : state.loadReducer,
  }
}




export default connect(mapStateToProps)(PrintLoadCash);

//export default PrintLoadCash

/*
const Contacts = ({ contacts }) => {
  return(
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
    </div>
  )
};
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

//export default Contacts
