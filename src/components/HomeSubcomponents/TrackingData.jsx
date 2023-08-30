import { useState, useEffect } from "react";
import Axios from "axios";

const TrackingData = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const articleId = "RGL104183114";
    try {
      const response = Axios.get(`http://localhost:3001/track`, {
        params: {
          articleId: articleId,
        },
      });

      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  }, []);
  //   console.log({ articleid });
  return <pre>{data}</pre>;
  //   console.log(props.articleid);
  //   console.log("Hello");
};

export default TrackingData;
