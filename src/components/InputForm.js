import React, { useState } from 'react';

const InputForm = ({ onGenerate, onInputChange, onInput1Change }) => {
  return (
    <div className='inputContainer'>
      <input className='inputText' type="text" onChange={onInputChange} placeholder="Enter your link" />
      <input className='inputText' type="text" onChange={onInput1Change} placeholder="Enter other text" />
      <button className='generate-btn' onClick={onGenerate}>Generate</button>
    </div>
  );
};

export default InputForm;