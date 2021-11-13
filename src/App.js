import React from "react";
import Counter from "./companents/counter"
import  IncreaseCounter  from "./companents/IncreaseCounter";
import  DecreaseCounter  from "./companents/DecreaseCounter";
import IncreaseByTwoCounter from "./companents/IncreaseByTwoCounter";


function App() {
  
  return (
    <div >
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
