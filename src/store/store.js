import  {createStore}  from 'redux';
import {  INCREMENTBYUSER, DECREMENTBYUSER, INCREMENT, DECREMENT } from './storeTypes';

const storeReducer = (state = {counter: 0 , status: ''} , action) =>{
    console.log('action.type',action.type)
     switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                counter : state.counter +1,
                status : INCREMENT
            }
        case 'DECREMENT':
            return{
                ...state,
                counter : state.counter -1,
                status : DECREMENT
            }
            case INCREMENTBYUSER:
                return {
                    ...state,
                    counter : state.counter + action.payload,
                    status: INCREMENTBYUSER
                }
    
            case DECREMENTBYUSER: 
            return {
                ...state,
                counter : state.counter - action.payload,
                status: DECREMENTBYUSER
            }  
         default:
            return{
                ...state
            }     
     }
}

const store = createStore(storeReducer);

export default store;