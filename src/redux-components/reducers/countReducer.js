import {Increase_Count,Decrease_Count} from '../constants/action-types'
import { increaseCountValue, decreaseCountValue } from '../actions'

const initialState ={
  count : 0
}

export default function countReducer (state = initialState, action){
  debugger;
  switch(action.type){
       case Increase_Count:
         return {count: state.count + 1};
         case Decrease_Count : 
         return {count: state.count - 1};
        default :
          return state;
  }

}