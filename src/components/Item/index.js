import React from "react";

const Item = ({ item }) => {
  const { itemId, name } = item;

  return (
    <p>
      <span>{itemId}</span>,<span>{name}</span>
    </p>
  );
};

export default Item;
