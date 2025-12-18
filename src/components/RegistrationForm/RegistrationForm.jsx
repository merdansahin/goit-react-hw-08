// src/components/RegistrationForm/RegistrationForm.jsx
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = await dispatch(register(values)).unwrap();
      console.log("REGISTER SUCCESS:", data);
      alert("Kayıt başarılı, şimdi giriş yapabilirsin!");
      resetForm();
    } catch (errorMessage) {
      console.log("REGISTER REJECTED:", errorMessage);
      alert(`Kayıt başarısız: ${errorMessage}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" required />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
