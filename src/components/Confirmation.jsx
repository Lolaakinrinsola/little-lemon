import React from "react";
import './confirmation.scss';

const Confirmation = ({ firstname, email }) => {
  return (
    <div className="bg">
      <div className="card">
        <div>
        <p>{`Hi!, ${firstname}. Your reservation has been sent to ${email}. Please check your spams `}</p>
        <p>You would be redirected to the homepage. Thanks for choosing us</p>

        </div>
      </div>
    </div>
  );
};

export default Confirmation;
