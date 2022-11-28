import React from "react";

import "./order.css";

const Order = (props) => {
  const { orderType, duration } = props;
  console.log(orderType, duration);
  return <div className="order">order</div>;
};

export default Order;
