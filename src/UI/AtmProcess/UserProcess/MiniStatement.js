import React from 'react';
import axios from 'axios';
import PrintMiniStatement from './PrintMiniStatement';
import {connect} from 'react-redux';
import {SET_MiniStatement} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';

class MiniStatement extends React.Component
{
    componentDidMount()
    {
        axios({
            method: 'get',
            url: 'http://localhost:8080/atmprocesswebapplication/ministate',
        }).then(res=>{this.props.SET_MiniStatement(res.data)});
    }
    
    render()
    {
        return (
            <div className = 'leftminibox'>
                <PrintMiniStatement/>
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
        SET_MiniStatement: (value)=>dispatch(SET_MiniStatement(value)),  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MiniStatement);


//export default MiniStatement
//.then(res=>{this.setState({ministatement_details: res.data})});
//{isCorrect?  : ""}
// let {isCorrect} = this.state;
// data: obj,
// let obj = JSON.stringify({auth: 'hello'});
// this.setState({isCorrect:true});
// constructor()
//     {
//         super();
//         this.state ={
//             // isCorrect: false
//         };
        
//     }


