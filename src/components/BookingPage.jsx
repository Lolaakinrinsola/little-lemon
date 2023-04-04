import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import CustomerDetails from "./CustomerDetails";
import ReactLoading from "react-loading";
import "./reservation.scss";

const BookingPage = (props) => {
  const [submit, setSubmit] = useState(false);

  return (
    <div className='contain'>
      <Nav />
      <div>
          <BookingForm
            name={props.time}
            availableTimes={props.availableTimes}
            date={props.dater}
            submitt={setSubmit}
            enter={props.enter}
          />
        
      <Footer />
    </div>
    </div>
  );
};

export default BookingPage;
