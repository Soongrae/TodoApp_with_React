import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (!value) {
            return alert('入力してください。')  // ← めちゃくちゃ忘れやすい。
        }

        addTodo(value)

        setValue('')  // ← めちゃくちゃ忘れやすい。
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}  // ← めちゃくちゃ忘れやすい。
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>追加</button>
            </form>
        </>
    )
}

export default Form