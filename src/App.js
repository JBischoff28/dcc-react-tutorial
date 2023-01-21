import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "1-21-2023"}, {weight: 176, date: "1-22-2023"}])

  function AddNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div >
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProp={AddNewEntry}/>
    </div>
  );
}

export default App;
