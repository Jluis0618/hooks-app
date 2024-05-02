import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    
   const data =   {  
        username: '',
        email: '', 
        password: ''}


    const {formState, onInputChange, onResetForm, username, email, password} = useForm(data);



    // Use Effect
    useEffect(() => {
        // console.log('Use Effect called!')
    }, [])

    useEffect(() => {
        // console.log('formState Changed!')
    }, [formState])

    useEffect(() => {
        // console.log('email Changed!')
    }, [email])





    return (
        <>
            <h1>Form With Custom Hook</h1>
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

            <input
                type="password"
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange} />

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
         
        </>
    )
}
