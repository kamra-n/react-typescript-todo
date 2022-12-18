import { useState } from 'react'
import './index.css';
import './App.css';

import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoBody from './Components/TodoBody/TodoBody';

function App() {
  const todoArray: string[] = [];

  const [items, setItems] = useState<string[]>(todoArray)

  // add data to list
  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  }

  // delete data to list
  const deleteHandler = (id: any) => {
    console.log(id)
    // console.log(items[id])
    const newToDoItems = items.filter((element, index) => {
      if (index !== id) {
        return element
      }
    })

    setItems(newToDoItems)
  }

  return (
    <>
      <section className='main-container w-full rounded-xl p-5  bg-white md:max-w-[780px]'>
        <TodoHeader add={addItemHandler} data={items} />
      </section>
      <section className='max-h-[70vh] overflow-y-auto bg-white rounded-xl p-5 mt-3'>

        <TodoBody data={items} deleteHandler={deleteHandler} />
      </section>
    </>
  )
}

export default App
