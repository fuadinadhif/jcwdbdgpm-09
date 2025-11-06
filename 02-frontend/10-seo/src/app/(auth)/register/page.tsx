"use client";

import MainWrapper from "@/components/main-wrapper";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

interface IValues {
  name: string;
  email: string;
  password: string;
}

const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Register() {
  async function handleSubmit(
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/users/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      alert("Register success");
      formikHelpers.resetForm();
    } catch (error) {
      console.error(error);
      alert(`Error registering user: ${error}`);
    }
  }

  return (
    <MainWrapper>
      <h2 className="title">Register</h2>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <Field className="border p-2" id="name" type="text" name="name" />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />

              <label htmlFor="email">Email</label>
              <Field
                className="border p-2"
                id="email"
                type="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />

              <label htmlFor="password">Password</label>
              <Field
                className="border p-2"
                id="password"
                type="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-blue-500 p-2"
              >
                {formik.isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </MainWrapper>
  );
}
