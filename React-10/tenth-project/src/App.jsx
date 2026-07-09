import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["mango", "banana"]);

  function addItem() {

    setItems([...items, input]);
    setInput("");
  }

  const removeItem = (index) => {
    const newArray = [...items];
    newArray.splice(index, 1);
    setItems(newArray);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item}</h2>
          <button onClick={() => removeItem(index)}>
            Remove
          </button>
        </div>
      ))}

      <input
        type="text"
        value={input}
        placeholder="Enter name"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default App;