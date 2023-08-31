import React, { useState } from "react";

const DropdownBox = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [iseps, setIseps] = useState(true);
  const [isefs, setefs] = useState(false);

  const handleEPS = () => {
    setIseps(true);
    setefs(false);
  };
  const handleEFS = () => {
    setIseps(false);
    setefs(true);
  };
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "EPS") {
      handleEPS();
    } else if (value === "EFS") {
      handleEFS();
    }
  };
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Select a service
        </label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="EPS">Express Post Services</option>
          <option value="EFS">Express Financial Services</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Select the type of service
        </label>
        {iseps && (
          <select
            className="w-full p-2 border rounded-md"
            value={selectedOption1}
            onChange={handleOption2Change}
          >
            <option value="UMS">Urgent Mail Service (UMS)</option>
            <option value="EMS">Express Mail Service(EMS)</option>
            <option value="COD">Cash on Delivery (COD)</option>
          </select>
        )}
        {isefs && (
          <select
            className="w-full p-2 border rounded-md"
            value={selectedOption1}
            onChange={handleOption2Change}
          >
            <option value="FMO">Fax Money Order (FMO)</option>
            <option value="UMO">Urgent Money Order (UMO)</option>
          </select>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Select Type of Client
        </label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="RC">Regular Client</option>
          <option value="LRC">Local Regular Client</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Select Country to Ship to (only for EMS)
        </label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="RC">Country</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Enter Weight in grams.
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={textFieldValue}
          onChange={handleTextFieldChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DropdownBox;
