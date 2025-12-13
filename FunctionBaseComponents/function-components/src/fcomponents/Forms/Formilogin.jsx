import React from 'react'
import { useFormik } from 'formik'

const Formilogin = () => {
    const formik = useFormik({
        initialValues: {
            username: " ",
            password: " "
        },
        onSubmit: (value) => {
            console.log(value)
        }
    })
    return (
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id='username'
                name='username'
                value={formik.username}
                onChange={formik.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id='password'
                name='password'
                value={formik.password}
                onChange={formik.handleChange}
            />
            <button type='submit'>Submit</button>
        </form>

    )
}

export default Formilogin