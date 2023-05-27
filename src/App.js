
import './App.css';
import {useDispatch , useSelector} from 'react-redux';
import { DECREMENT, INCREMENT, INCREMENTBYUSER, DECREMENTBYUSER } from './store/storeTypes';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const counterStore = useSelector(state=> state);
  const [inputValue, setInputValue] = useState(0)

  const addValue = () => {
        dispatch ( {type: INCREMENT})
  };

  const addValue1 = () => {
    dispatch ( {type: DECREMENT})
};

const addByUser = () => {
       dispatch ({type: INCREMENTBYUSER, payload: parseInt(inputValue)})
};

const subByUser = () => {
  dispatch ({type: DECREMENTBYUSER, payload: parseInt(inputValue)})
};

  console.log('counterStore' ,counterStore)
    return(
        <div className='app' >
                {counterStore && <span className='opration'>{counterStore.counter} </span>}
                {counterStore.status !== '' && 
                   <span className={counterStore.status == INCREMENT ? 'status-add': 'status-sub'} >
                      {counterStore.status}
                   </span>
                }
               <button className='add-bt' onClick={addValue}> addValue </button>
               <button className = 'sub-bt' onClick={addValue1}> decrese Value </button>
               <br/>
                < input type = 'number' value = {inputValue} 
                  onChange={(e) => {setInputValue(e.target.value)}} />

               <button className='add-bt' onClick={addByUser}> addValue </button>
               <button className = 'sub-bt' onClick={subByUser}> decrese Value </button>
         </div>
        
  );
};

export default App;
