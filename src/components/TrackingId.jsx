import React from "react";

export const TrackingId = () => {
  // Mock data for tracking information
  const trackingData = {
    trackingId: "123456789",
    bookingOffice: "Islamabad",
    deliveryStatus: "In Transit",
    deliveryOffice: "Islamabad",
    dispatchDateTime: "2023-08-30 10:00 AM",
  };

  return (
    <div className="main_div justify-center ml-[22rem]">
      
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          marginTop: 10,
          marginBottom: 10,
          maxWidth: 600,
          padding: 10,
        }}
      >
        <h2 className="flex justify-center bg-[#ed1b24] font-semibold  text-white ">
          Tracking Information
        </h2>
        <p>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              maxWidth: 600,
              marginBottom: 1,
              marginTop: 25,
              padding: 10,
            }}
          >
            {" "}
            <span style={{ color: "#333" }}>
              <b>Tracking ID: </b>
              {trackingData.trackingId}
            </span>{" "}
          </div>
          <br />
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              maxWidth: 600,
              marginTop: 1,
              padding: 10,
            }}
          >
            {" "}
            <span style={{ color: "#333" }}>
              <b>Booking Office: </b>
              {trackingData.bookingOffice}
            </span>
          </div>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              maxWidth: 600,
              marginBottom: 1,
              marginTop: 25,
              padding: 10,
            }}
          >
            {" "}
            <span style={{ color: "#333" }}>
              <b>Delivery Office: </b>
              {trackingData.deliveryOffice}
            </span>{" "}
          </div>
          <br />{" "}
        </p>
      </div>
      <div
        style={{
          background: "white",
          padding: "20px",
          marginTop: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          marginBottom: 100,
          maxWidth: 600,
        }}
      >
        <div className="flex justify-center bg-[#ed1b24] font-semibold  text-white">
          Tracking ID details{" "}
        </div>
        <h2 className="font-semibold ">Dispatch Information</h2>
        <p>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Dispatch Date and Time:
          </span>{" "}
          {trackingData.dispatchDateTime}
        </p>
        <p>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            delivery Status:
          </span>{" "}
          {trackingData.deliveryStatus}
        </p>
      </div>
    </div>
  );
};