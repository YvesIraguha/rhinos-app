import React, { useState } from "react";

const RecordItemForm = ({ handleRegisterItem }) => {
  const [name, setName] = useState("");
  const [itemId, setItemId] = useState("");

  const onRegisterItem = () => {
    handleRegisterItem(name, itemId);
  };

  return (
    <form onSubmit={onRegisterItem}>
      <label for="name">Item name</label> <br />
      <input
        name="name"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      <label for="itemId">Item id</label>
      <br />
      <input
        name="itemId"
        onChange={(e) => setItemId(e.target.value)}
        type="text"
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RecordItemForm;
