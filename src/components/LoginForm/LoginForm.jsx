// src/components/LoginForm/LoginForm.jsx
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = await dispatch(logIn(values)).unwrap();
      console.log("LOGIN SUCCESS:", data);
      // burada istersen navigate('/contacts') yapabilirsin
      resetForm();
    } catch (errorMessage) {
      console.log("LOGIN REJECTED:", errorMessage);
      alert(`Giriş başarısız: ${errorMessage}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleBlur }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <input
              name="email"
              type="email"
              className={css.input}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              required
            />
          </label>

          <label className={css.label}>
            Password
            <input
              name="password"
              type="password"
              className={css.input}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-password"
              required
            />
          </label>

          <button className={css.button} type="submit">
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
}
