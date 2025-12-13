import { useFormik } from "formik";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            username: " ",
            password: " "
        },
        onSubmit: (value) => {
            console.log(formik)
        }
    })
    return (
        <form action="">
            <label htmlFor="username">Username</label>
            <input
                type="username"
                id="username"
                name="username"
                value={formik.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="text"
                name="password"
                id="password"
                value={formik.handleChange}
            />

        </form>


    )
}
export default Form