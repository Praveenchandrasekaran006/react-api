import React from 'react';
import axios from 'axios';
import PrintMiniStatement from './PrintMiniStatement';
import {connect} from 'react-redux';
import {SET_MiniStatement} from 'C://Users/praveen-pt3815/react-api/src/UI/redux/actions/loadAction';
class MiniStatement extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            isCorrect: false
        };
        
    }

    componentDidMount()
    {
        let obj = JSON.stringify({auth: 'hello'});
        axios({
            method: 'post',
            url: 'http://localhost:8080/atmprocesswebapplication/ministate',
            data: obj,
        }).then(res=>{this.props.SET_MiniStatement(res.data)});
        this.setState({isCorrect:true});
    }
    //.then(res=>{this.setState({ministatement_details: res.data})});
    render()
    {
        let {isCorrect} = this.state;
        return (
            
            <div className = 'leftminibox'>
                {isCorrect? <PrintMiniStatement/> : ""}
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

