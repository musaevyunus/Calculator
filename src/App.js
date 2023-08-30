import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNumber,
  setOperator,
  calculateResult,
  resetCalculator,
} from './calculatorSlice';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const { num1, num2, operator, result } = useSelector(
    (state) => state.calculator
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(result);
  }, [result]);

  const handleNumberClick = (number, input) => {
    if (operator === '') {
      dispatch(setNumber({ number, input: 'num1' }));
    } else {
      dispatch(setNumber({ number, input: 'num2' }));
    }
    setInputValue(inputValue + number);
  };

  const handleOperatorClick = (operator) => {
    dispatch(setOperator(operator));
    setInputValue(inputValue + operator);
  };

  const handleCalculateClick = () => {
    dispatch(calculateResult());
  };

  const handleResetClick = () => {
    dispatch(resetCalculator());
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCalculateClick();
    }
  };

  return (
    <div className='calc'>
      <input
        type="text"
        value={inputValue}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <br />
      <div className='numbers'>
      <button onClick={() => handleNumberClick('1', 'num1')}>1</button>
      <button onClick={() => handleNumberClick('2', 'num1')}>2</button>
      <button onClick={() => handleNumberClick('3', 'num1')}>3</button>
      
      <button onClick={() => handleNumberClick('4', 'num2')}>4</button>
      <button onClick={() => handleNumberClick('5', 'num2')}>5</button>
      <button onClick={() => handleNumberClick('6', 'num2')}>6</button>
      <button onClick={() => handleNumberClick('7', 'num2')}>7</button>
      <button onClick={() => handleNumberClick('8', 'num2')}>8</button>
      <button onClick={() => handleNumberClick('9', 'num2')}>9</button>
    
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => handleNumberClick('0', 'num2')}>0</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={handleCalculateClick}>=</button>
      </div>
      
     
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default App;
