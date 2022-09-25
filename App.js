import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  /**logic for displaying numbers in div */
  const numberAction = (event) =>{/*use event for some action  */
  const number = event.target.textContent;
  if(display === '0'){
    setDisplay(number)
  }else{
  setDisplay(display + number)
  };
};

  let handleOperator = (event) => {
      let operators = event.target.textContent;

      
      setDisplay(display + ' ' + operators + ' ');

    };
    const equal = () =>{
      setDisplay(eval(display))

    };
     /**first split string to array then pick up the last element and if thaat last element dont have dot we push dot then continue with work */
    const decimal = ()=>{
    const array =  display.split(' ');
    const lastElement = array[array.length - 1];

    if(!lastElement.includes('.')){
      setDisplay(display+'.'); 
    }

    };
    const clear = () =>{
      if(display !== '0'){
        setDisplay('0')
      }

    };
  

 
  
  return (
    <div className="App">
      <div className="calculator">
  <div id="display" className="row">{display}</div>
  <div id="clear" className="row" onClick={clear}>
    AC
  </div>
  <div id="seven" onClick={numberAction}>7</div>
  <div id="eight" onClick={numberAction}>8</div>
  <div id="nine" onClick={numberAction}>9</div>
  <div id="multiply" onClick={handleOperator} >*</div>
  <div id="four" onClick={numberAction}>4</div>
  <div id="five" onClick={numberAction}>5</div>
  <div id="six" onClick={numberAction}>6</div>
  <div id="divide" onClick={handleOperator} >/</div>
  <div id="one" onClick={numberAction}>1</div>
  <div id="two" onClick={numberAction}>2</div>
  <div id="three" onClick={numberAction}>3</div>
  <div id="add" onClick={handleOperator} >+</div>
  <div id="zero" onClick={numberAction}>0</div>
  <div id="decimal" onClick={decimal}>.</div>
  <div id="equals" onClick={equal}>=</div>
  <div id="subtract" onClick={handleOperator}>-</div>
</div>
</div>
  
  );
  
}


export default App;
