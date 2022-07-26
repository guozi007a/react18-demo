import React, { useEffect, useState } from 'react'

const RepeatDemo = () => {

  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('count: ', count)
    setCount(count + 3)
  }, [])
  return <div>
    <h3>{count}</h3>
    <button
      style={{ width: 100 }}
      onClick={() => {setCount(count + 1)}}
    > + </button>
  </div>
}

export default RepeatDemo