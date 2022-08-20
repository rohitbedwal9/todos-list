import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  let snoStyle={
    "float":"left",
    "paddingRight":"1em",
    "opacity":"70%",
    "color":"red",
    "fontSize":"1.5em"
  }
  return (
    <div className='py-2'>
      <p style={snoStyle}>{todo.sno+1}</p>
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
          <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    </div>
  )
}