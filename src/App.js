import React from "react";
import './App.css';
import { useSelector, useDispatch} from "react-redux";

const App = () => {
  const state = useSelector(state => (state.counter))
  const dispatch = useDispatch();
  const inc = () => {
      // setCounter(preValues => preValues+1);
      dispatch({type:'INC'})
  }
  const dnc = () => {
    // setCounter(preValues => preValues-1);
    dispatch({type:'DNC'})
  }

  return (
    <div className="App">
      <button onClick={dnc}>-</button>
      <span>{state}</span>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default App;
