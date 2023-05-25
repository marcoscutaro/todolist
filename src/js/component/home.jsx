import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";


//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);
  
	function addItem() {
	  if (!newItem) {
		alert("Enter an item.");
		return;
	  }
  
	  const item = {
		id: Math.floor(Math.random() * 1000),
		value: newItem,
	  };
  
	  setItems((oldList) => [...oldList, item]);
	  setNewItem("");
	}
  
	function deleteItem(id) {
	  const newArray = items.filter((item) => item.id !== id);
	  setItems(newArray);
	}
  
	return (
	  <div>
		<h1>To do list APP</h1>
		<input
		  type="text"
		  placeholder="add a task"
		  value={newItem}
		  onChange={(e) => setNewItem(e.target.value)}
		/>
		<button onClick={addItem}>Add</button>
  
		<div className="taskList-container">
		  <ul className="list-section">
			{items.map((item) => {
			  return (
				<li key={item.id}>
				  {item.value}
				  <button onClick={() => deleteItem(item.id)}>
					<FontAwesomeIcon icon={faTrash} />
				  </button>
				</li>
			  );
			})}
		  </ul>
		</div>
	  </div>
	);
  }
	
export default Home;
