import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB using an API endpoint
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
