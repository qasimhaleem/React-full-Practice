import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
const FormiYup = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15).min(3).required(),
            password: Yup.string().max(15).min(8).required(),
        })
    })
    return (
        <form action="" onSubmit={formik.handleSubmit}
            style={{ display: 'grid', placeItems: 'center', height: '100vh' }}

        >
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id='username'
                name='username'
                value={formik.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.username && formik.errors.username ? formik.errors.username : null}
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id='password'
                name='password'
                value={formik.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <br />
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default FormiYup