import React from 'react'

const handleInputChange = (e) => {
  const newName = e.target.value
}

export default ({ todoList }) => {
  const { id, name } = todoList
  return (
    <div onDoubleClick={e => console.log(id)}>
      {name}
      <form action="">
        <input type="text" value={name} onChange={handleInputChange} />
      </form>
    </div>
  )
}
