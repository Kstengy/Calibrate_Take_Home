import React from "react";
import { useState } from "react";
import Order from "./components/order";
import OrderButton from "./components/OrderButton";
import CoffeeCounter from "./components/CoffeeCounter";
import BaristaQueue from "./components/BaristaQueue";
import "./App.css";

const drinks = {
  "Cafe au lait": {
    name: "Cafe au lait",
    duration: 4000,
    component: <Order orderType="Cafe au lait" duration={4000} />,
  },
  Cappuccino: {
    name: "Cappuccino",
    duration: 10000,
    component: <Order orderType="Cappuccino" duration={10000} />,
  },
  Espresso: {
    name: "Espresso",
    duration: 15000,
    component: <Order orderType="Espresso" duration={15000} />,
  },
};

function App() {
  const [queue, setQueue] = useState([]);
  const [coffeeCounter, setCoffeeCounter] = useState([]);

  const handleAddOrderToQueue = (type) => {
    console.log(`Adding ${type} order to queue...`);
    const newQueue = [...queue, drinks[type]];
    setQueue(newQueue);
  };

  const handleSendToCoffeeCounter = (finishedDrink, newQueue) => {
    //remove from queue and update coffee counter
    // console.log("FINISHED: ", finishedDrink.name);
    setCoffeeCounter([...coffeeCounter, finishedDrink.component]);
    setQueue(newQueue);
  };

  const handleRemoveFromCoffeeCounter = () => {
    console.log("removing from queue...");
    if (coffeeCounter.length) {
      setCoffeeCounter(coffeeCounter.slice(1));
    }
  };

  return (
    <div className="App">
      <div className="order-buttons">
        <p>Add order:</p>
        <OrderButton
          orderType={drinks["Cafe au lait"].name}
          handleAddOrder={handleAddOrderToQueue}
        />
        <OrderButton
          orderType={drinks["Cappuccino"].name}
          handleAddOrder={handleAddOrderToQueue}
        />
        <OrderButton
          orderType={drinks["Espresso"].name}
          handleAddOrder={handleAddOrderToQueue}
        />
      </div>
      <div className="barista">
        {queue.length ? (
          <BaristaQueue
            queue={queue}
            handleSendToCoffeeCounter={handleSendToCoffeeCounter}
          />
        ) : (
          <p>No orders yet</p>
        )}
      </div>
      <div className="coffee-counter">
        <CoffeeCounter
          handleRemoveFromCoffeeCounter={handleRemoveFromCoffeeCounter}
        />
        <p>Coffee Counter</p>
        {coffeeCounter.map((orderItem) => {
          return <div>{orderItem}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
