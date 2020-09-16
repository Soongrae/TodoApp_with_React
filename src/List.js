import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const List = ({ todos, deleteTodo }) => {
    return (
        <>
            <UL>
                {
                    todos.map(todo => {
                        return (
                            <Item
                                content={todo.content}
                                key={todo.id}
                                id={todo.id}
                                deleteTodo={deleteTodo}
                            />
                        )
                    })
                }
            </UL>
        </>
    )
}

const UL = styled.ul`
    padding-left: 0;
`

export default List