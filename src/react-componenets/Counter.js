import React,{Component} from 'react'

 class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.increaseCount = this.increaseCount.bind(this); //event binding best prectise 
        this.decreaseCount = this.decreaseCount.bind(this);
    }

  increaseCount(){
       this.setState({count: this.state.count + 1})
  }

  decreaseCount(){
    this.setState({count: this.state.count - 1})
  }

//   increaseCount = () => { // event bind no need to bind on cunstructor 
//     console.log("Button is clicked");
//    }

    render(){
        return(
         <div>
              <button onClick={this.increaseCount}>ADD</button> <span></span>
                <span>{this.state.count}</span> <span></span>
               
                <button onClick={this.decreaseCount}>Subtract</button>

         </div>

        )
    }


}

export default Counter;