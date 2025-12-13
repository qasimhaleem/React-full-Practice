import React from 'react'
import { useFormik } from 'formik'

const FormikSignup = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (value) => {
            console.log(value)
        }
    })
    return (
        <form action="" onSubmit={formik.handleSubmit}>
            <h1>Pleas fill the form to succssfully login</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id='username'
                name='username'
                value={formik.username}
                onChange={formik.handleChange}
            />
            <br />
            <label htmlFor="Password">Password</label>
            <input
                type="Password"
                id='password'
                name='password'
                value={formik.password}
                onChange={formik.handleChange}
            />
            <br />
            <button type='submit'>Sign Up</button>
        </form>

    )
}

export default FormikSignup