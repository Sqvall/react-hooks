import React, {useEffect, useRef, useState} from "react";

const Ref = () => {
  const [count, setCount] = useState(0)
  const prevValue = useRef(0)

  useEffect(() => {
    prevValue.current = count
  }, [count])

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>useRef: {prevValue.current}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
    </>
  )
}

export default Ref
