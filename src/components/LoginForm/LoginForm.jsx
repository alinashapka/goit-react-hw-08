import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            email: "",
            password: "",
        }} onSubmit={handleSubmit}>
            <Form className={clsx(css.form)} autoComplete="off">
                <label className={clsx(css.label)}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={clsx(css.label)}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}