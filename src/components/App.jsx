import React, {useState} from 'react';
import TodoList from './TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  function changeHandle(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(e){
    e.preventDefault();
    setItems(prevItems=>{
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems=>{
      return prevItems.filter((item, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" >
        <input onChange= {changeHandle} name="list" type="text" value= {inputText} autocomplete = "off" />
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
        {items.map((todoItem, index)=>(
           <TodoList  list = {todoItem} key={index} id={index} onChecked={deleteItem}/>
        ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
