import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import Axios from "axios";

const TrackingData = () => {
  const { articleId } = useParams();
  const [data, setResponseData] = useState("");

  try {
    const response = Axios.post("http://localhost:3001/track", {
      articleId: articleId,
    });

    setResponseData(response.data);
  } catch (error) {
    console.error("Error:", error);
    // Handle error here
  }

  return (
    <div>
      <h1>Traking</h1>
      <h1>Article Tracking Number: {data.articleId}</h1>
      <h1>Booking Date: {data.bookingDate}</h1>
      <h1>Booking Office: {data.bookingOffice}</h1>
      <h1>Delivery Office: {data.deliveryOffice}</h1>
    </div>
  );
};

export default TrackingData;
