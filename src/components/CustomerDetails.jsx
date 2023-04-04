import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Confirmation from "./Confirmation";
import './reservation.scss'

const CustomerDetails = ({ submitt }) => {
  const [submit, setSubmit] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();
  const [values, setvalues] = useState({});
  const { email, FirstName } = values;
  console.log(email);
  const SignupSchema = Yup.object().shape({
    FirstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    LastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    textmessage: Yup.string().min(5, "too Short"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  console.log(values);
  useEffect(() => {
    if (submit) {
      navigate("/");
    }
  }, submit);

  return (
    <div className="contain m-auto ">
      <Nav />
      <div className=" m-auto justify-center flex ">
      <Formik
        initialValues={{
          email: "",
          FirstName: "",
          LastName: "",
          textmessage: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          setvalues(values);
          setSubmit(true);
          setConfirmation(true);

          setTimeout(() => {
            navigate("/");
          }, 10000);
        }}
      >
        {({ errors, touched, onSubmit }) => (
          <Form className='p-[2em] md:px-[5em] mx-[2em] md:mx-[7em] max-w-[80em]  shadow-3xl'>
            <h1 className='font-mar font-bold text-[2em] text-primary-10'>Input Your details</h1>
            <label htmlFor="FirstName" className='flex items-center gap-[.5em] font-bold'>
              {" "}
              FirstName: <Field name="FirstName" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] '/>
            </label>
            {errors.FirstName && touched.FirstName ? (
              <div>{errors.FirstName}</div>
            ) : null}

            <label htmlFor="LastName" className='flex items-center gap-[.5em] font-bold'>
              LastName: <Field name="LastName" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] '/>
            </label>

            {errors.LastName && touched.LastName ? (
              <div>{errors.LastName}</div>
            ) : null}

            <label htmlFor="email" className='flex items-center gap-[.5em] font-bold'>
              Email: <Field name="email" type="email" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] ' />
            </label>

            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="textmessage" className='flex items-center gap-[.5em] font-bold'>send a special message</label>
            <Field name="textmessage" as="textarea" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-xl px-[1em] py-[.3em] '/>
            <button type="submit" onClick={onSubmit} className="hover:text-highlight-10 hover:bg-highlight-20 px-[1em] py-[.5em] rounded-[16px] bg-primary-20 text-highlight-20 mt-[2em]">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      </div>
      {confirmation ? (
        <div>
          <Confirmation firstname={FirstName} email={email} />
        </div>
      ) : null}

      <Footer />
    </div>
  );
};

export default CustomerDetails;
