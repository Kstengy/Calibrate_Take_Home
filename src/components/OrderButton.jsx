import React from "react";
import "./OrderButton.css";

const OrderButton = (props) => {
  const { orderType, handleAddOrder } = props;
  return (
    <div className="order-button" onClick={() => handleAddOrder(orderType)}>
      {orderType}
    </div>
  );
};

export default OrderButton;
