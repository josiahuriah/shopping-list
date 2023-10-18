import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [shoppingListItem, setShoppingListItem] = useState('')
  const [shoppingList, setShoppingList] = useState([])

  const handleSumbit = (e) => {
    e.preventDefault()
    setShoppingList(prevList =>[...prevList, shoppingListItem])
    console.log(shoppingList)
  }
  const handleDeleteOption = (optionToRemove) => {
    setShoppingList((prevList) => 
      prevList.filter((option) => optionToRemove !== option )
    )
  }

  return(
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="shoppingListItem">Items To Buy</label>
        <input type='text' required
         value={shoppingListItem}
         onChange={(e)=> setShoppingListItem(e.target.value)}
         ></input>
        <input type="submit" value="Submit"></input>
      </form>
      <div>
        {shoppingList.map((item) => (
        <div key={item}>
          <p>{item}</p>
          <button onClick={() => handleDeleteOption(item)}>Delete</button>
        </div>))}
      </div>
    </div>
  )
}