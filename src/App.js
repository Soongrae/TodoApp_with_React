import React, { useState } from 'react'
import List from './List'
import Form from './Form'
import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content,
                id: shortid.generate()
            }
        ])
    }

    const deleteTodo = id => {
        if (window.confirm('本当に削除しますか？')) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Todoリスト</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App