import React from 'react';

const TextInputField = props => {
  return(
    <label onChange={props.handleChange}>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
      />
    </label>
  )
}

export default TextInputField;
