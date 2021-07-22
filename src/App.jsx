import React, { useState } from "react";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setitems((olditems) => {
      return [...olditems, inputList]; 
    });
    setInputList('');
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1> ToDo List </h1>
          <br/>
          <div>
          <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} className="item"/>
          <button className="addButton" onClick={listOfItem}> + </button>
          </div>

          <ol className="list">
            {/* <li> {inputList} </li> */}

            {items.map((itemval) => {
              return <li>{itemval}</li>
            })}
          </ol>
        </div>
      </div>

    </>
  )
}
  export default App;