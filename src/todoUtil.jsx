import React, { useState } from 'react'

function TodoUtil(props) {
  return (
    <div className="todoBox">
      <div className="arrayTitle">
        {props.todoArray.title}

        <div>id:{props.todoArray.id}</div>
      </div>{' '}
      <div>{props.todoArray.description} </div>
    </div>
  )
}

export default TodoUtil
