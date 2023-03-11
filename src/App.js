import './App.css';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import React from "react";

function App() {
  return (
    <div className='App'>  
      <AddToDo/>
      <ToDos/>
    </div>
  );
}

export default App;
