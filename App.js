import React, { useState } from 'react';
import './App.css';
import CalculatorDisplay from './components/CalculatorDisplay';
import OperatorButton from './components/OperatorButton';
import NumberButton from './components/NumberButton';

function App() {
  
  // state variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // function to handle number inputs
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
        setDisplayValue(num.toString());
    } else {
        setDisplayValue(displayValue + num);
    }
  };

  // function to handle operator inputs
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
        setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
        setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
        setDisplayValue((num1 / num2).toString());
    } else if (operator === '^') {
        setDisplayValue((Math.pow(num1, num2)).toString());
    } else if (operator === 'mod') {
        setDisplayValue((num1 % num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');
  };  

  return (
    <div>
      <div id='displayDiv'>
        <CalculatorDisplay displayValue={displayValue} />
      </div>
      <div className='buttonRow'>
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('+')}
          symbol='+'
        />
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('-')}
          symbol='-'
        />
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('*')}
          symbol='x'
        />
      </div>
      <div className='buttonRow'>
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('/')}
          symbol='÷'
        />
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('^')}
          symbol='^'
        />
        <OperatorButton
          className='operatorButton' 
          onClick={() => handleOperatorInput('mod')}
          symbol='mod'
        />
      </div>
      <div className='buttonRow'>
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(7)}
          num='7'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(8)}
          num='8'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(9)}
          num='9'
        />
      </div>      
      <div className='buttonRow'>
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(4)}
          num='4'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(5)}
          num='5'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(6)}
          num='6'
        />
      </div>
      <div className='buttonRow'>
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(1)}
          num='1'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(2)}
          num='2'
        />
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(3)}
          num='3'
        />
      </div>
      <div className='buttonRow'>
        <NumberButton
          className='numberButton'
          onClick={() => handleNumberInput(0)}
          num='0'
        />
        <OperatorButton 
          className='operatorButton'          
          onClick={handleClear}
          symbol='C'
        />
        <OperatorButton 
          className='operatorButton'          
          onClick={handleEqual}
          symbol='='
        />
      </div>
    </div>
  );
  

}

export default App;