import React from 'react'
import { increaseCountValue , decreaseCountValue } from "./actions/index";
import {connect} from 'react-redux'

class Counter extends React.Component{

    // constructor(props){
    //     super(props);
    //     debugger;
    //     // this.state ={
    //     //     count: 0
    //     // }
    //     this.increaseCount = this.increaseCount.bind(this);
    //     this.decreaseCount = this.decreaseCount(this);

    // }

    increaseCount =() =>
    {
        debugger;
        this.props.increaseCountValue();
    }

    decreaseCount =() =>{
        this.props.decreaseCountValue();
        
    }

  
    
    render() {
        return (
             <div>

                
                 <button onClick={this.increaseCount}>+</button> <span></span>
                 <span>{this.props.count}</span>
                 
                 <span> </span>
                 <button onClick={this.decreaseCount}>-</button>
             </div>
        );
    }
}

function mapStateTOProps(state){
    debugger;
return{
    count : state.countReducer.count
}
}

const mapDispatchToProps={
increaseCountValue,
decreaseCountValue
};

export default connect(mapStateTOProps,mapDispatchToProps)(Counter);

