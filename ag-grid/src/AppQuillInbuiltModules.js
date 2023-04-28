import React, { useState } from "react";
import Editor from "./EditorWithInbuiltModules";
// import Editor from "./EditroWithCustomToolbar";
// import Editor from './EditorWithInbuiltModulesWithUndo';

export default function AppQuill() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [list, setList] = useState([{ id: generateString() }]);
  const [sample, setSample] = useState();
  function generateString(length = 5) {
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
      <h2>Inbuilt Modules</h2>
      <button onClick={addEditor}>Add</button>
      {list.map((m) => (
        <div key={m.id}>
          <input type="text" value={sample} onChange={e => setSample(e.target.value)} />
          <Editor eid={m.id} deleteEditor={deleteEditor} sample={sample}/>
        </div>
      ))}
    </div>
  );
}
