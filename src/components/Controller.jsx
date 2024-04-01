import React from 'react'

function Controller({handleSetcount}) {
  return (
    <div className='ctrl'>
        <button onClick={() => handleSetcount(-1)}>-1</button>
        <button onClick={() => handleSetcount(-10)}>-10</button>
        <button onClick={() => handleSetcount(-100)}>-100</button>
        <button onClick={() => handleSetcount(100)}>100</button>
        <button onClick={() => handleSetcount(10)}>10</button>
        <button onClick={() => handleSetcount(1)}>1</button>
    </div>
  )
}

export default Controller