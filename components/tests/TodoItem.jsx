import React from 'react'
import PropTypes from 'prop-types'
import { Text, Pressable } from 'react-native'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <Pressable
      onDoubleClick={() => deleteTodo(todo.id)} 
      style={{ cursor: 'pointer' }}
     >
       <Text>{todo.title}</Text>
     </Pressable>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem