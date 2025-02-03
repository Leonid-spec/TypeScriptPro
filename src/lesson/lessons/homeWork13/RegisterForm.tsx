import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./registerForm.module.css"; // Импорт CSS-модуля

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Имя пользователя должно содержать минимум 3 символа")
    .max(20, "Имя пользователя не должно превышать 20 символов")
    .matches(/^[a-zA-Z0-9_]+$/, "Разрешены только буквы, цифры и _")
    .required("Имя пользователя обязательно"),

  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),

  password: Yup.string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(32, "Пароль не должен превышать 32 символа")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
    .matches(
      /[@$!%*?&]/,
      "Пароль должен содержать хотя бы один спецсимвол (@$!%*?&)"
    )
    .required("Пароль обязателен"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Отправленные данные:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div>
            <label className={styles.label}>Имя пользователя:</label>
            <Field
              placeholder="*"
              type="text"
              name="username"
              className={styles.input}
            />
            <ErrorMessage
              name="username"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label className={styles.label}>Email:</label>
            <Field
              placeholder="*"
              type="email"
              name="email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label className={styles.label}>Пароль:</label>
            <Field
              placeholder="*"
              type="password"
              name="password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label className={styles.label}>Подтвердите пароль:</label>
            <Field
              placeholder="*"
              type="password"
              name="confirmPassword"
              className={styles.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={styles.error}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            Зарегистрироваться
          </button>
          <span className={styles.text}>
            fields with * symbols are required
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
