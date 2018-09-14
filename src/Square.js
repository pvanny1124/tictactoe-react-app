import React from 'react';

//Functional Component
//Dont need to use arrow function syntax to use correct value of "this"
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square;