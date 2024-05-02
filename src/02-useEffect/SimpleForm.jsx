import React, { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [fromState, setFromState] = useState({
        username: 'Strider',
        email: 'jose@gmail.com'
    })

    const { username, email } = fromState

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFromState({
            ...fromState,
            [name]: value
        })
    }

    // Use Effect
    useEffect(() => {
        // console.log('Use Effect called!')
    }, [])

    useEffect(() => {
        // console.log('formState Changed!')
    }, [fromState])

    useEffect(() => {
        // console.log('email Changed!')
    }, [email])





    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange} />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='jose@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange} />

            {
                (username === 'Strider2') && <Message />
            }
        </>
    )
}
