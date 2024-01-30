import React, { useState } from 'react'
import { evaluate } from 'mathjs';
function Calculator() {
    const [input, setInput]= useState("");
    const [result, setResult]= useState("");

    const handleclick = (value) =>{
        if (value === '=') {
            try{
                setResult((evaluate(input).toString()));
            } catch(error){
                setResult('Error');
            }
            } else if (value === 'AC'){
                setInput('');
                setResult('');
            } else {
                setInput((prevInput) => prevInput + value);
            }
    }
    
  return (
    <div className='calculator'>
        <h1>Calculator</h1>
        <div className='display'>
            <div className='input'>{input}</div>
            <div className='result'>{result}</div>
        </div>
        <div className='buttons'>
            <button onClick={() => handleclick('7')}>7</button>
            <button onClick={() => handleclick('8')}>8</button>
            <button onClick={() => handleclick('9')}>9</button>
            <button onClick={() => handleclick('/')}>/</button>


            <button onClick={() => handleclick('4')}>4</button>
            <button onClick={() => handleclick('5')}>5</button>
            <button onClick={() => handleclick('6')}>6</button>
            <button onClick={() => handleclick('*')}>*</button>
            
            
            <button onClick={() => handleclick('1')}>1</button>
            <button onClick={() => handleclick('2')}>2</button>
            <button onClick={() => handleclick('3')}>3</button>
            <button onClick={() => handleclick('-')}>-</button>
            
            
            <button onClick={() => handleclick('0')}>0</button>
            <button onClick={() => handleclick('=')}>=</button>
            <button onClick={() => handleclick('+')}>+</button>
            <button onClick={() => handleclick('AC')}>AC</button>
        </div>
    </div>
  )
}

export default Calculator
