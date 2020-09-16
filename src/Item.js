import React, { useState } from 'react'
import styled from 'styled-components'

const Item = ({ content, deleteTodo, id }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = e => {
        e.preventDefault()
        deleteTodo(id)
    }

    return (
        <LI>
            <input
                type='checkbox'
                onChange={() => {setIsDone(!isDone)}}
            />
            <span
                style={{
                    textDecoration: isDone ? 'line-through' : 'none'
                }}>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </LI>
    )
}

const LI = styled.li`
    list-style: none;
`

export default Item