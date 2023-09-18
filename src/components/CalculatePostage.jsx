import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { InternationalTariff } from "../DataObjects/InternationalTariff.jsx";

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
  const [isDomestic, setDomestic] = useState(true);
  const [isInternational, setInternational] = useState(false);
  const [country, setCountry] = useState("0");

  const [isclient0, setclient0] = useState(true);
  const [isclient1, setclient1] = useState(false);
  const [isclient2, setclient2] = useState(false);
  const [isclient3, setclient3] = useState(false);

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

    InternationalTariff.forEach((country) => {
      if (value === country.country) {
        setCountry(country.country);
      }
    });

    switch (value) {
      case "0":
        setclient0(true);
        setclient1(false);
        setclient2(false);
        setclient3(false);

        break;

      case "1":
        setclient0(false);
        setclient1(true);
        setclient2(false);
        setclient3(false);

        break;
      case "2":
        setclient0(false);
        setclient1(false);
        setclient2(true);
        setclient3(false);

        break;
      case "3":
        setclient0(false);
        setclient1(false);
        setclient2(false);
        setclient3(true);
        break;
      default:
        console.log("error");
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormData({ ...formData, value: "0" });
    let postageResult = 0;

    if (isclient0) {
      setArticleWeight("0");
      setResult(0);
      // Check if isUms is true for client type 0
      if (articleWeight > 0 && articleWeight <= 250) {
        postageResult = 150;
      } else if (articleWeight > 250 && articleWeight <= 500) {
        postageResult = 230;
      } else if (articleWeight > 500) {
        const additionalWeight = articleWeight - 500;
        const additionalCharge = Math.ceil(additionalWeight / 500) * 75;
        postageResult = 230 + additionalCharge;
      }
    } else if (isclient1) {
      setArticleWeight("0");
      setResult(0);
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
      setArticleWeight("0");
      setResult(0);
      // Check if isUms is true for client type 2
      if (articleWeight > 0 && articleWeight <= 25000) {
        postageResult = 150;
      } else if (articleWeight > 25000 && articleWeight <= 50000) {
        postageResult = 300;
      } else if (articleWeight > 50000) {
        alert("Value exceeds 50000 limit");
      }
    } else if (isclient3) {
      setArticleWeight("0");
      setResult(0);
      // Check if isCod is true for client type 3
      if (articleWeight > 0 && articleWeight <= 10000) {
        postageResult = 175;
      } else if (articleWeight > 10000 && articleWeight <= 20000) {
        postageResult = 200;
      } else if (articleWeight > 20000 && articleWeight <= 50000) {
        postageResult = 225;
      } else if (articleWeight > 50000 && articleWeight <= 100000) {
        postageResult = 250;
      }
    } else if (isInternational) {
      setArticleWeight("0");
      setResult(0);
      InternationalTariff.forEach((country) => {
        if (clientType === country.country) {
          if (articleWeight > 0 && articleWeight <= 1000) {
            postageResult = country.weight;
          } else if (articleWeight > 1000) {
            const additionalWeight = articleWeight - 1000;
            const additionalCharge =
              Math.ceil(additionalWeight / 500) * country.addl;
            postageResult = country.weight + additionalCharge;
          }
        }
      });
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
    <Box w={{ base: "90%", md: "80%" }} mx={"auto"}>
      <div className="button flex flex-row space-x-5 justify-center items-center p-5">
        <button
          className={`p-3 bg-${
            isDomestic ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isDomestic ? "white" : "black"
          } hover:bg-[color:var(--primary-color)] rounded-none hover:text-white shadow-lg `}
          onClick={() => {
            setArticleWeight("0"); // Reset the article weight when the form is reset
            setResult(0);
            setDomestic(true);
            setInternational(false);
            setclient0(true);
            setclient1(false);
            setclient2(false);
            setclient3(false);
          }}
        >
          Domestic Services
        </button>
        <button
          className={`p-3 bg-${
            isInternational ? "[color:var(--primary-color)] " : "slate-200"
          }  text-${
            isInternational ? "white" : "black"
          } hover:bg-[color:var(--primary-color)] rounded-none hover:text-white shadow-lg `}
          onClick={() => {
            setCountry("AFGHANISTAN");
            setArticleWeight("0"); // Reset the article weight when the form is reset
            setResult(0);
            setDomestic(false);
            setInternational(true);
            setclient0(false);
            setclient1(false);
            setclient2(false);
            setclient3(false);
          }}
        >
          International Services
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
            Calculate Postage
          </div>
        </div>
        <div className="flex flex-row">
          <table className="m-auto mt-2 mb-3">
            <tbody className="p-2 ">
              <tr>
                {isInternational && (
                  <td className="font-base pr-4">Article weight</td>
                )}
                {isclient0 && (
                  <td className="font-base pr-4">Article weight</td>
                )}

                {isclient1 && (
                  <td className="font-base pr-4">Article weight</td>
                )}

                {isclient2 && <td className="font-base pr-4">Amount</td>}
                {isclient3 && <td className="font-base pr-4">Amount</td>}
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
                  {isclient0 && (
                    <span className="text-sm font-semibold text-blue-600 font-base">
                      (grams)
                    </span>
                  )}
                  {isclient1 && (
                    <span className="text-sm font-semibold text-blue-600 font-base">
                      (grams)
                    </span>
                  )}
                  {isInternational && (
                    <span className="text-sm font-semibold text-blue-600 font-base">
                      (grams)
                    </span>
                  )}
                  {isclient2 && (
                    <span className="text-sm font-semibold text-blue-600 font-base">
                      (Rs)
                    </span>
                  )}
                  {isclient3 && (
                    <span className="text-sm font-semibold text-blue-600 font-base">
                      (Rs)
                    </span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-1 py-2 font-normal">Postage For: </td>
                <td>
                  <select
                    name="type"
                    onChange={handleClient}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    {isDomestic && (
                      <>
                        <option value="0">Urgent Mail Service </option>
                        <option value="1">Cash On Delivery</option>
                        <option value="2">Fax Money Order </option>
                        <option value="3">Urgent Money Order</option>
                      </>
                    )}
                    {isInternational && (
                      <>
                        {InternationalTariff.map((country, id) => (
                          <option key={id} value={country.country}>
                            {country.country}
                          </option>
                        ))}
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
              {isclient0 && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For UMS
                </Text>
              )}
              {isclient1 && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For COD
                </Text>
              )}
              {isclient2 && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For FMO
                </Text>
              )}
              {isclient3 && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For UMO
                </Text>
              )}
              {isInternational && (
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb="2"
                  color="var(--primary-color)"
                >
                  Calculated Postage For {country}
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
    </Box>
  );
};

export default CalculatePostage;
