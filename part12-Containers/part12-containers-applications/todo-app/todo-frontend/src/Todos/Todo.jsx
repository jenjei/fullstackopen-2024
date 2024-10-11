
import React, { useState } from 'react';

export const Todo = ({todo, deleteTodo, completeTodo}) => {

    const onClickDelete = (todo) => () => {
        deleteTodo(todo)
      }
    
      const onClickComplete = (todo) => () => {
        completeTodo(todo)
      }

    const [done, setIsDone] = useState(todo.done ? "This todo is done" : "This todo is not done");
    console.log(todo.done);

    const doneInfo = (
        <>
          <span>
            <button onClick={onClickDelete(todo)}> Delete </button>
          </span>
        </>
      )

      const notDoneInfo = (
        <>
          <span>
            <button onClick={onClickDelete(todo)}> Delete </button>
            <button onClick={onClickComplete(todo)}> Set as done </button>
          </span>
        </>
      )

      return(
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <span>
            {todo.text} 
            </span>
            <span data-testid="done-text">
            {done}
            </span>
            {todo.done ? doneInfo : notDoneInfo}
      </div>
      );

}