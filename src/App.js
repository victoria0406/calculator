import './App.css';
import { useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import reducer, {add_input, calculate, save} from './reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const AppWrapper = () => {
  const store = createStore(reducer, composeWithDevTools()); 

  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

function App() {
  const {input_list, answer} =  useSelector(state => ({
    input_list:state.input_list,
    answer:state.answer
  }));
  const dispatch = useDispatch();
  return (
    <div>
      <div>테스트용 계산기</div>
      <div>{input_list}</div>
      <div>{answer}</div>
      <div>
        {[...Array(10).keys()].map((ele)=>(
          <button key={ele} onClick={()=>{dispatch(add_input(String(ele)));dispatch(calculate());}}>{ele}</button>
        ))
        }
      </div>
      <div>
        <button onClick={()=>{dispatch(add_input("("))}}>{"("}</button>
        <button onClick={()=>{dispatch(add_input(")"));dispatch(calculate());}}>{")"}</button>
        <button onClick={()=>{dispatch(add_input("+"))}}>+</button>
        <button onClick={()=>{dispatch(add_input("-"))}}>-</button>
        <button onClick={()=>{dispatch(add_input("x"))}}>x</button>
        <button onClick={()=>{dispatch(add_input("/"))}}>/</button>
        <button onClick={()=>{dispatch(save())}}>=</button>
      </div>
      <button>=</button>
    </div>
  );
}

export default AppWrapper;
