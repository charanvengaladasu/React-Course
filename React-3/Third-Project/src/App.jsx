import React from 'react';
import "./App.css";
import Child from "./components/Child";
import Pizza1 from "./assets/pizza1.jpg";
import Pizza2 from "./assets/pizza2.jpg";
import Pizza3 from "./assets/pizza3.jpg";
const App = () => {
  const title1="Pizza1";
  const title2="Pizza2";
  const title3="Pizza3";
  const price1=300;
  const price2=200;
  const price3=380;

  return (
    <div>
      <Child pizza1={Pizza1} pizza2={Pizza2} pizza3={Pizza3}
      title1={title1} title2={title2} title3={title3}
      Price1={price1} Price2={price2} Price3={price3}/>
    </div>
  );
};

export default App;