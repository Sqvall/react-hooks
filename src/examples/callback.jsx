import React, {useState} from "react";
import CallbackItemsList from "./callback-items-list";

const Callback = () => {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'white'
  }

  const generateItemsFromAPI = () => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>Добавить</button>
      <button onClick={() => setColored(prevState => !prevState)}>Изменить</button>

      <CallbackItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default Callback
