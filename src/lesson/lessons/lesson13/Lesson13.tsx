import { useFormik } from "formik";
import React from "react";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson13.module.css";
import * as Yup from "yup";

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

const schema = Yup.object().shape({
  model: Yup.number()
    .typeError("model is a number")
    .required("model is required")
    .integer("model is integer")
    .min(100, "model number is more than 100")
    .max(2000, "model number is less than 2000"),
  creator: Yup
  .string()
  .required("its a required field"),
  email: Yup.string()
    .required("email is required field")
    .email("incorrect email format")
    .max(50, "your max symbol is 50"),
});

export default function Lesson13() {
  const formik = useFormik({
    initialValues: {
      model: "",
      creator: "",
      email: "",
    } as IFormValues,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm()
    },
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson13: Yup</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input
          value={formik.values.model}
          onChange={formik.handleChange}
          placeholder="robot model"
          type="text"
          name="model"
        />
        <input
          value={formik.values.creator}
          onChange={formik.handleChange}
          placeholder="creator name"
          type="text"
          name="creator"
        />
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="company email"
          type="text"
          name="email"
        />
        <MyButton type="submit" text="send" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.model}</span>
      <span className={styles.errorMessage}>{formik.errors.creator}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
    </div>
  );
}
