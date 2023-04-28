import React, { useState } from "react";
import DetailsEditor from "./DetailsEditor";

export default function App() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [list, setList] = useState([{ id: generateString() }]);

  function generateString(length = 10) {
    let result = "_";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  function addEditor() {
    const ne = { id: generateString() };
    setList([...list, ne]);
  }

  function deleteEditor(id){
    console.log('deleting', id)
    setList(list.filter(l => l.id !== id))
  }

  return (
    <div className="App">
      <h2>Custom toolbar</h2>
      <button onClick={addEditor}>Add</button>
      {list.map((m) => (
        <div key={m.id}>
          <DetailsEditor eid={m.id} />
        </div>
      ))}
    </div>
  );
}
