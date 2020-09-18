import React, {useEffect, useMemo, useState} from "react";

const complexCompute = (number) => {
  let count = 0
  while (count < 1000000000) count++
  return number
}

const Memo = () => {
  const [number, setNumber] = useState(10)
  const [colored, setColored] = useState(false)

  // const styles = {
  //   color: colored ? 'darkred' : 'white'
  // }
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'white'
  }), [colored])

  // const compute = complexCompute(number)
  const compute = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log(styles)
  }, [styles])

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {compute}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Отнять</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить</button>
    </>
  )
}

export default Memo
