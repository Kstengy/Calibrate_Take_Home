import React, { useEffect } from "react";
import { useState } from "react";

const BaristaQueue = (props) => {
  const { queue, handleSendToCoffeeCounter } = props;
  console.log("BARISTA: ", queue);
  const [itemToWorkOn, ...newQueue] = queue;

  const [timer, setTimer] = useState(true);
  console.log("HIT", itemToWorkOn);

  useEffect(() => {
    const timeFunc = setTimeout(() => {
      console.log("INSIDE TIMEOUT FUNC");
      console.log(`Barista making ${itemToWorkOn.name}`);
      handleSendToCoffeeCounter(itemToWorkOn, newQueue);
      setTimer(!timer);
    }, itemToWorkOn.duration);
    return () => clearTimeout(timeFunc);
  }, [timer, handleSendToCoffeeCounter]);

  return <div>Barista is currently making {itemToWorkOn.name}</div>;
};

export default BaristaQueue;
