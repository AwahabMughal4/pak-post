import React from "react";
import Table from "./Table";

const Complaints = () => {
  return (
    <div className="mx-auto px-9 ">
      <div>
        <h1 className="font-bold text-red-600 py-2 px-3 ">
          Complaints & Suggesions
        </h1>
        <p className="text-base px-3">
          The complaints and suggestions can be forwarded directly to complaint
          Cell Directorate General Pakistan Post G-8/4, Islamabad through mail,
          phone, fax, E-Mail or by any other mean. While making complaint about
          any of the service please remember to provide basic details including
          article / receipt no, Place of Booking, Date of Booking, Sender,
          Receiver Name and your contact details with phone no.
        </p>
      </div>
      <div className="mt-10  mx-3 px-3">
        <Table />
      </div>
    </div>
  );
};

export default Complaints;
