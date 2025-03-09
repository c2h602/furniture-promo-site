import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(15).required("Поле обязательное"),
        email: Yup.string()
          .email("Неверный формат Email")
          .required("Поле обязательное"),
        phone: Yup.string().matches(
          /^\+?\d{11,}$/,
          "Формат телефона +79xxxxxxxxx"
        ),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="orderForm__container">
          <div className="name__input">
            <Field id="name" name="name" type="text" placeholder="Имя" />
            <div className="error-message">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="email__input">
            <Field id="email" name="email" type="email" placeholder="Email" />
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>

        <div className="phone__input">
          <Field id="phone" name="phone" type="tel" placeholder="Телефон" />
          <div className="error-message">
            <ErrorMessage name="phone" />
          </div>
        </div>

        <div>
          <button className="submit__btn" type="submit">
            Отправить заявку
          </button>
        </div>
      </Form>
    </Formik>
  );
};
