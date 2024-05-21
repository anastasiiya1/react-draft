import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./FeedbackForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d+$/, "Invalid phone number")
    .required("Required"),
  message: Yup.string()
    .min(5, "Too short!")
    .max(200, "Too long!")
    .required("Required"),
  coffeeChoice: Yup.string()
    .oneOf(["espresso", "americano", "cappuccino", "latte", "cocoa", "tea"])
    .required("Required"),
});

const initialValues = {
  username: "hello",
  number: "+380",
  message: "",
  coffeeChoice: "espresso",
};

const FeedbackForm = () => {
  const nameField = useId();
  const emailField = useId();
  const messageField = useId();
  const coffeeField = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameField}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameField}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />

          <label htmlFor={emailField}>Phone number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={emailField}
          />
          <ErrorMessage className={css.error} name="number" component="span" />

          <label htmlFor={coffeeField}>Coffee Choice</label>
          <Field
            as="select"
            name="coffeeChoice"
            id={coffeeField}
            className={css.select}
          >
            <option value="espresso">Espresso</option>
            <option value="americano">Americano</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="latte">Latte</option>
            <option value="cocoa">Cocoa</option>
            <option value="tea">Tea</option>
          </Field>
          <ErrorMessage
            className={css.error}
            name="coffeeChoice"
            component="span"
          />

          <label htmlFor={messageField}>Message</label>
          <Field
            as="textarea"
            name="message"
            id={messageField}
            rows="5"
            className={css.textarea}
          />
          <ErrorMessage className={css.error} name="message" component="span" />
          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FeedbackForm;
