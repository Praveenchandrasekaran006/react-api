import React from 'react'
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";
import {connect} from 'react-redux';
 
class PrintMiniStatement extends React.Component
{
  render()
  {
    let mini = this.props.loadReducer.ministatement_details;
    const columns = [{ Header: 'Transaction Id',accessor: 'transaction_id' },{ Header: 'Transaction Remarks',accessor: 'transaction_remark' },{ Header: 'Transaction Type',accessor: 'transaction_type' },{ Header: 'Transaction Amount',accessor: 'transaction_amt' }];
    return(
      <div>
        <center>
          <h6><ReactTable data = {mini} columns = {columns} defaultPageSize = {5}  className = 'minireacttable'/></h6> </center>

      </div>
    );
  }
};

const mapStateToProps= (state) =>{
  return {
      loadReducer : state.loadReducer,
  }
}

export default connect(mapStateToProps)(PrintMiniStatement);
//export default PrintMiniStatement