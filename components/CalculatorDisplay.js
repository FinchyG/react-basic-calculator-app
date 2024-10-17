import React from "react";

function CalculatorDisplay(props) {
  
  return (
    <div id="displayDiv">
      <p id="displayP">
          {props.displayValue}
      </p>
    </div>
  );
}

export default CalculatorDisplay;