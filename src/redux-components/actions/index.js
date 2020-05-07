import {Increase_Count,Decrease_Count} from '../constants/action-types'


export function increaseCountValue() {
    return { type: Increase_Count}
  };

  export function decreaseCountValue() {
    return { type: Decrease_Count}
  };