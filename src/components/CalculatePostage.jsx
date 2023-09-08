import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
const CalculatePostage = () => {
  const [formData, setFormData] = useState({
    value: "0",
    type: "0",
    ParcelType: "0",
  });

  const [articleWeight, setArticleWeight] = useState("0"); // Changed initial state to a string
  const [clientType, setClientType] = useState("0");
  const [isSubmit, setIsSubmit] = useState(false);
  const [result, setResult] = useState(0);
  const [isUms, setUms] = useState(true);
  const [isCod, setCod] = useState(false);
  const [isFmo, setFmo] = useState(false);
  const [isUmo, setUmo] = useState(false);
  const [isclient0, setclient0] = useState(true);
  const [isclient1, setclient1] = useState(false);
  const [isclient2, setclient2] = useState(false);
  const [isclient3, setclient3] = useState(false);
  const [isclient4, setclient4] = useState(false);
  // const [isclient5, setclient5] = useState(false);
  const [isclient6, setclient6] = useState(false);
  const [isclient7, setclient7] = useState(false);

  const handleArticle = (e) => {
    const { name, value } = e.target;
    if (name === "value") {
      setArticleWeight(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleClient = (e) => {
    const { value } = e.target;
    setClientType(value);
    switch (value) {
      case "0":
        setclient0(true);
        setclient1(false);
        setclient2(false);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
      case "1":
        setclient0(false);
        setclient1(true);
        setclient2(false);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
      case "2":
        setclient0(false);
        setclient1(false);
        setclient2(true);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
      case "3":
        setclient0(false);
        setclient1(false);
        setclient2(false);
        setclient3(true);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
      case "4":
        setclient0(false);
        setclient1(false);
        setclient2(false);
        setclient3(false);
        setclient4(true);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
      case "6":
        setclient0(false);
        setclient1(false);
        setclient2(false);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(true);
        setclient7(false);
        break;
      case "7":
        setclient0(false);
        setclient1(false);
        setclient2(false);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(true);
        break;

      // Add cases for other values as needed
      default:
        setclient0(true);
        setclient1(false);
        setclient2(false);
        setclient3(false);
        setclient4(false);
        // setclient5(false);
        setclient6(false);
        setclient7(false);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    let postageResult = 0;

    if (isclient0) {
      // Check if isUms is true for client type 0
      if (articleWeight > 0 && articleWeight <= 250) {
        postageResult = 55;
      } else if (articleWeight > 250 && articleWeight <= 500) {
        postageResult = 87;
      } else if (articleWeight > 500) {
        const additionalWeight = articleWeight - 500;
        const additionalCharge = Math.ceil(additionalWeight / 500) * 18;
        postageResult = 122 + additionalCharge;
      }
    } else if (isclient1) {
      // Check if isCod is true for client type 1
      if (articleWeight > 0 && articleWeight <= 250) {
        postageResult = 87;
      } else if (articleWeight > 250 && articleWeight <= 500) {
        postageResult = 122;
      } else if (articleWeight > 500) {
        const additionalWeight = articleWeight - 500;
        const additionalCharge = Math.ceil(additionalWeight / 500) * 35;
        postageResult = 122 + additionalCharge;
      }
    } else if (isclient2) {
      // Check if isUms is true for client type 2
      if (articleWeight > 0 && articleWeight <= 250) {
        postageResult = 55;
      } else if (articleWeight > 250 && articleWeight <= 500) {
        postageResult = 87;
      } else if (articleWeight > 500) {
        const additionalWeight = articleWeight - 500;
        const additionalCharge = Math.ceil(additionalWeight / 500) * 18;
        postageResult = 122 + additionalCharge;
      }
    } else if (isclient3) {
      // Check if isCod is true for client type 3
      if (articleWeight > 0 && articleWeight <= 250) {
        postageResult = 87;
      } else if (articleWeight > 250 && articleWeight <= 500) {
        postageResult = 122;
      } else if (articleWeight > 500) {
        const additionalWeight = articleWeight - 500;
        const additionalCharge = Math.ceil(additionalWeight / 500) * 35;
        postageResult = 122 + additionalCharge;
      }
    } else if (isclient4) {
      // Check if isFmo is true for client type 4
      if (articleWeight > 0 && articleWeight <= 25000) {
        postageResult = 150;
      } else if (articleWeight > 25000 && articleWeight <= 50000) {
        postageResult = 300;
      } else if (articleWeight > 50000) {
        alert("Value exceeds 50000 limit");
      }
    } else if (isclient6) {
      // Check if isUmo is true for client type 6
      if (articleWeight > 0 && articleWeight <= 10000) {
        postageResult = 175;
      } else if (articleWeight > 10000 && articleWeight <= 20000) {
        postageResult = 200;
      } else if (articleWeight > 20000 && articleWeight <= 50000) {
        postageResult = 225;
      } else if (articleWeight > 50000 && articleWeight <= 100000) {
        postageResult = 250;
      }
    } else if (isclient7) {
      // Check if isUmo is true for client type 7
      if (articleWeight > 0 && articleWeight <= 10000) {
        postageResult = 135;
      } else if (articleWeight > 10000 && articleWeight <= 20000) {
        postageResult = 160;
      } else if (articleWeight > 20000 && articleWeight <= 50000) {
        postageResult = 185;
      } else if (articleWeight > 50000 && articleWeight <= 100000) {
        postageResult = 210;
      }
    }

    setResult(postageResult);

    // You can now access the articleWeight and clientType for calculations
    console.log("Article Weight:", articleWeight);
    console.log("Client Type:", clientType);
    console.log("Postage Result:", postageResult);

    // Handle form submission here, e.g., send data to the server
  };

  const handleReset = (e) => {
    e.preventDefault();
    setIsSubmit(false);
    setArticleWeight("0"); // Reset the article weight when the form is reset
    setResult(0); // Reset the result
  };

  return (
    <div>
      <div className="button flex flex-row space-x-5 justify-center items-center p-5">
        <button
          className={` p-3 bg-${
            isUms ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isUms ? "white" : "black"
          } hover:bg-[color:var(--primary-color)]  hover:text-white shadow-lg `}
          onClick={() => {
            setUms(true);
            setCod(false);
            setFmo(false);
            setUmo(false);
            setclient0(true);
            setclient1(false);
            setclient2(false);
            setclient3(false);
            setclient4(false);
            // setclient5(false);
            setclient6(false);
            setclient7(false);
          }}
        >
          UMS
        </button>
        <button
          className={`p-3 bg-${
            isCod ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isCod ? "white" : "black"
          } hover:bg-[color:var(--primary-color)] rounded-none hover:text-white shadow-lg `}
          onClick={() => {
            setUms(false);
            setCod(true);
            setFmo(false);
            setUmo(false);
            setclient0(false);
            setclient1(false);
            setclient2(true);
            setclient3(false);
            setclient4(false);
            // setclient5(false);
            setclient6(false);
            setclient7(false);
          }}
        >
          COD
        </button>
        <button
          className={`p-3 bg-${
            isFmo ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isFmo ? "white" : "black"
          } hover:bg-[color:var(--primary-color)] rounded-none hover:text-white shadow-lg `}
          onClick={() => {
            setUms(false);
            setCod(false);
            setFmo(true);
            setUmo(false);
            setclient0(false);
            setclient1(false);
            setclient2(false);
            setclient3(false);
            setclient4(true);
            // setclient5(false);
            setclient6(false);
            setclient7(false);
          }}
        >
          FMO
        </button>
        <button
          className={`p-3 bg-${
            isUmo ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isUmo ? "white" : "black"
          } hover:bg-[color:var(--primary-color)] rounded-none hover:text-white shadow-lg `}
          onClick={() => {
            setUms(false);
            setCod(false);
            setFmo(false);
            setUmo(true);
            setclient0(false);
            setclient1(false);
            setclient2(false);
            setclient3(false);
            setclient4(false);
            // setclient5(false);
            setclient6(true);
            setclient7(false);
          }}
        >
          UMO
        </button>
      </div>
      <form
        name="FrontPage_Form1"
        action=""
        onSubmit={handleSubmit}
        className="max-w-md mb-4  m-auto bg-slate-50 hover:bg-slate-100 shadow-lg border border-slate-300 rounded-t-md"
      >
        <div className="flex flex-row items-center justify-center py-2 space-x-6 shadow-lg bg-[color:var(--primary-color)]  rounded-t-md"></div>
        <div className="flex justify-center shadow-xs">
          <div className="px-2 py-2 mt-2 text-lg font-semibold shadow-sm">
            Calculate EMS Postage
          </div>
        </div>
        <div className="flex flex-row">
          <table className="m-auto mt-2 mb-3">
            <tbody className="p-2 ">
              <tr>
                <td colSpan="2" className="font-semibold Head text-md">
                  Calculate Postage:
                </td>
              </tr>
              <tr>
                <td className="font-base pr-4">Article weight</td>
                <td>
                  <input
                    type="text"
                    name="value"
                    value={formData.value}
                    onChange={handleArticle}
                    size="20"
                    maxLength="5"
                    className="w-full mt-4 px-3 py-2 border rounded-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <span className="text-sm font-semibold text-blue-600 font-base">
                    (grams)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 font-normal">Client Type</td>
                <td>
                  <select
                    name="type"
                    onChange={handleClient}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    {isUms && (
                      <>
                        <option value="0"> Local Regular Client</option>
                        <option value="1">Regular Client</option>
                      </>
                    )}
                    {isCod && (
                      <>
                        <option value="2">Local Regular Client</option>
                        <option value="3">Regular Client</option>
                      </>
                    )}
                    {isFmo && (
                      <>
                        <option value="4">FMO Tariff</option>
                      </>
                    )}
                    {isUmo && (
                      <>
                        <option value="6">Regular Client (City)</option>
                        <option value="7">Regular Client (Local)</option>
                      </>
                    )}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="right">
                  <button
                    type="submit"
                    className="px-3 py-1 mt-3 mr-2 border rounded shadow-lg hover:bg-slate-200 border-slate-300"
                  >
                    {" "}
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 mt-3 mr-2 border rounded shadow-lg hover:bg-slate-200 border-slate-300"
                    onClick={handleReset}
                  >
                    {" "}
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {isSubmit && (
          <div className=" flex flex-col space-x-5 justify-center items-center p-5">
            <Box w={{ base: "90%", md: "80%" }} mx={"auto"} my={"2rem"}>
              {isUmo && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For UMO
                </Text>
              )}
              {isFmo && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For FMO
                </Text>
              )}
              {isUms && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For UMS
                </Text>
              )}
              {isCod && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For COD
                </Text>
              )}
              <Text>
                <b>Tariff:{"    "}</b> {result}Rs/-
              </Text>
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb="2"
                color="var(--primary-color)"
              >
                GST
              </Text>
              <div>
                <Text>
                  <b>Islamabad:</b> 16%
                </Text>
                <Text>
                  <b>Pakhtunkhwa:</b> 15%
                </Text>
                <Text>
                  <b>Punjab:</b> 16%
                </Text>
                <Text>
                  <b>Sindh:</b> 13%
                </Text>
                <Text>
                  <b>Balochistan:</b> 15%
                </Text>
              </div>
            </Box>
          </div>
        )}
      </form>
    </div>
  );
};

export default CalculatePostage;
