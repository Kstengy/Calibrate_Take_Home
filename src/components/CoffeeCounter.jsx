import React, { useEffect } from "react";
import { useState } from "react";

const CoffeeCounter = (props) => {
  const { handleRemoveFromCoffeeCounter } = props;
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      console.log("After 3 seconds");
      handleRemoveFromCoffeeCounter();
      setTimer(!timer);
    }, 3000);
    return () => clearTimeout(timeFunc);
  }, [timer, handleRemoveFromCoffeeCounter]);
  return <div>{}</div>;
};

export default CoffeeCounter;
