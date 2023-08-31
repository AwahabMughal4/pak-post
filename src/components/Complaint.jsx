import React, { useState } from 'react';
import { Text } from "@chakra-ui/react";

const Complaints = () => {
  const [articleNo, setArticleNo] = useState('');
  const [complainantName, setComplainantName] = useState('');
  const [complainantMobile, setComplainantMobile] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [preferModeOfReply, setPreferModeOfReply] = useState('');
  const [complaintReason, setComplaintReason] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingOffice, setBookingOffice] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderTel, setSenderTel] = useState('');
  const [senderMobile, setSenderMobile] = useState('');
  const [addresseeName, setAddresseeName] = useState('');
  const [addresseeAddress, setAddresseeAddress] = useState('');
  const [addresseeCity, setAddresseeCity] = useState('');
  const [addresseeEmail, setAddresseeEmail] = useState('');
  const [addresseeTel, setAddresseeTel] = useState('');
  const [addresseeMobile, setAddresseeMobile] = useState('');
  const [remarks, setRemarks] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [location, setLocation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleArticleNoChange = (e) => {
    setArticleNo(e.target.value);
  };

  const handleComplainantNameChange = (e) => {
    setComplainantName(e.target.value);
  };

  const handleComplainantMobileChange = (e) => {
    setComplainantMobile(e.target.value);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handlePreferModeOfReplyChange = (e) => {
    setPreferModeOfReply(e.target.value);
  };

  const handleComplaintReasonChange = (e) => {
    setComplaintReason(e.target.value);
  };

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value);
  };

  const handleBookingOfficeChange = (e) => {
    setBookingOffice(e.target.value);
  };

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleSenderAddressChange = (e) => {
    setSenderAddress(e.target.value);
  };

  const handleAddresseeNameChange = (e) => {
    setAddresseeName(e.target.value);
  };

  const handleAddresseeAddressChange = (e) => {
    setAddresseeAddress(e.target.value);
  };
  const handleSenderCityChange = (e) => {
    setSenderCity(e.target.value);
  };

  const handleSenderEmailChange = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleSenderTelChange = (e) => {
    setSenderTel(e.target.value);
  };

  const handleSenderMobileChange = (e) => {
    setSenderMobile(e.target.value);
  };

  const handleAddresseeCityChange = (e) => {
    setAddresseeCity(e.target.value);
  };

  const handleAddresseeEmailChange = (e) => {
    setAddresseeEmail(e.target.value);
  };

  const handleAddresseeTelChange = (e) => {
    setAddresseeTel(e.target.value);
  };

  const handleAddresseeMobileChange = (e) => {
    setAddresseeMobile(e.target.value);
  };
  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleTehsilChange = (e) => {
    setTehsil(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
    console.log('Submitted:', {
      articleNo,
      complainantName,
      complainantMobile,
      serviceType,
      preferModeOfReply,
      complaintReason,
      bookingDate,
      bookingOffice,
      senderName,
      senderAddress,
      addresseeName,
      addresseeAddress,
    });
  };

  const serviceTypes = ['Type 1', 'Type 2', 'Type 3'];
  const replyModes = ['Email', 'Phone', 'Mail'];
  const complaintReasons = ['Reason 1', 'Reason 2', 'Reason 3'];
  const cities = ['City 1', 'City 2', 'City 3']; // Update with actual city names
  const districts = ['District 1', 'District 2', 'District 3'];
  const tehsils = ['Tehsil 1', 'Tehsil 2', 'Tehsil 3'];
  const locations = ['Location 1', 'Location 2', 'Location 3'];

  return (
     <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-8">
    <div className="container mx-auto ">
      <div className="bg-red-600 text-white p-4 mb-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Create Complaint</h2>
        <p className=" mt-2">Please fill out the following form with your complaint.<br></br> We will review your request and follow up with you as soon as possible</p>
      </div>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-[70%]">
          <div className="flex space-x-4">
            <div className="w-[80%] ">
              <label htmlFor="articleNo" className="block text-lg  font-sans">
                Article No:
              </label>
              <input
                type="text"
                id="articleNo"
                value={articleNo}
                onChange={handleArticleNoChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-[80%]">
              <label htmlFor="preferModeOfReply" className="block text-lg  font-sans">
                Prefer Mode of Reply:
              </label>
              <select
                id="preferModeOfReply"
                value={preferModeOfReply}
                onChange={handlePreferModeOfReplyChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select a mode of reply</option>
                {replyModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-[80%]">
              <label htmlFor="complainantName" className="block text-lg  font-sans">
                Complainant's Name:
              </label>
              <input
                type="text"
                id="complainantName"
                value={complainantName}
                onChange={handleComplainantNameChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-[80%]">
              <label htmlFor="complainantMobile" className="block text-lg  font-sans">
                Complainant's Mobile:
              </label>
              <input
                type="text"
                id="complainantMobile"
                value={complainantMobile}
                onChange={handleComplainantMobileChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-[80%]">
              <label htmlFor="serviceType" className="block text-lg  font-sans">
                Service Type:
              </label>
              <select
                id="serviceType"
                value={serviceType}
                onChange={handleServiceTypeChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select a service type</option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[80%]">
              <label htmlFor="complaintReason" className="block text-lg  font-sans">
                Complaint Reason:
              </label>
              <select
                id="complaintReason"
                value={complaintReason}
                onChange={handleComplaintReasonChange}
                className="w-full p-2 border shadow-lg border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select a complaint reason</option>
                {complaintReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-[90%]">
              <label htmlFor="bookingDate" className="block text-lg  font-sans">
                Booking Date:
              </label>
              <input
                type="date"
                id="bookingDate"
                value={bookingDate}
                onChange={handleBookingDateChange}
                className="w-[80%] p-2 border shadow-lg border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-[90%]">
              <label htmlFor="bookingOffice" className="block text-lg  font-sans">
                Booking Office:
              </label>
              <input
                type="text"
                id="bookingOffice"
                value={bookingOffice}
                onChange={handleBookingOfficeChange}
                className="w-[80%] p-2 border shadow-lg border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Sender Detail</h3>
              <div>
                <label htmlFor="senderName" className="block text-lg  font-sans">
                  Name:
                </label>
                <input
                  type="text"
                  id="senderName"
                  value={senderName}
                  onChange={handleSenderNameChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderAddress" className="block text-lg  font-sans">
                  Address:
                </label>
                <textarea
                  id="senderAddress"
                  value={senderAddress}
                  onChange={handleSenderAddressChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderCity" className="block text-lg  font-sans">
                  City:
                </label>
                <select
                  id="senderCity"
                  value={senderCity}
                  onChange={handleSenderCityChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select a city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="senderEmail" className="block text-lg  font-sans">
                  Email:
                </label>
                <input
                  type="email"
                  id="senderEmail"
                  value={senderEmail}
                  onChange={handleSenderEmailChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderTel" className="block text-lg  font-sans">
                  Tel:
                </label>
                <input
                  type="tel"
                  id="senderTel"
                  value={senderTel}
                  onChange={handleSenderTelChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderMobile" className="block text-lg  font-sans">
                  Mobile:
                </label>
                <input
                  type="tel"
                  id="senderMobile"
                  value={senderMobile}
                  onChange={handleSenderMobileChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Addressee Detail</h3>
              <div>
                <label htmlFor="addresseeName" className="block text-lg  font-sans">
                  Name:
                </label>
                <input
                  type="text"
                  id="addresseeName"
                  value={addresseeName}
                  onChange={handleAddresseeNameChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="addresseeAddress" className="block text-lg  font-sans">
                  Address:
                </label>
                <textarea
                  id="addresseeAddress"
                  value={addresseeAddress}
                  onChange={handleAddresseeAddressChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="addresseeCity" className="block text-lg  font-sans">
                  City:
                </label>
                <select
                  id="addresseeCity"
                  value={addresseeCity}
                  onChange={handleAddresseeCityChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select a city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="addresseeEmail" className="block text-lg  font-sans">
                  Email:
                </label>
                <input
                  type="email"
                  id="addresseeEmail"
                  value={addresseeEmail}
                  onChange={handleAddresseeEmailChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="addresseeTel" className="block text-lg  font-sans">
                  Tel:
                </label>
                <input
                  type="tel"
                  id="addresseeTel"
                  value={addresseeTel}
                  onChange={handleAddresseeTelChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="addresseeMobile" className="block text-lg  font-sans">
                  Mobile:
                </label>
                <input
                  type="tel"
                  id="addresseeMobile"
                  value={addresseeMobile}
                  onChange={handleAddresseeMobileChange}
                  className="w-[90%] p-2 border shadow-lg border-gray-300 rounded"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row mr-28 ">
            <label htmlFor="remarks" className="block text-lg f font-serif mb-1 mr-2 mt-10">
              Remarks:
            </label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={handleRemarksChange}
              className="w-full p-2 border shadow-lg border-gray-300 rounded font-serif"
                rows="4"
            />
          </div>
          <div className="flex flex-row space-x-4">
            <div className="w-[90%]">
              <label htmlFor="district" className="block text-lg font-sarif mb-1 mt-10">
                District:
              </label>
              <select
                id="district"
                value={district}
                onChange={handleDistrictChange}
                className="w-[90%] p-2 border shadow-lg border-gray-300 rounded mt-4"
                required
              >
                <option value="" disabled>Select a district</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[90%]">
              <label htmlFor="tehsil" className="block text-lg font-sarif mb-1 mt-10">
                Tehsil:
              </label>
              <select
                id="tehsil"
                value={tehsil}
                onChange={handleTehsilChange}
                className="w-[90%] p-2 border shadow-lg border-gray-300 rounded mt-4"
                required
              >
                <option value="" disabled>Select a tehsil</option>
                {tehsils.map((tehsil) => (
                  <option key={tehsil} value={tehsil}>
                    {tehsil}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[90%]">
              <label htmlFor="location" className="block text-lg font-sarif mb-1 mt-10">
                Location:
              </label>
              <select
                id="location"
                value={location}
                onChange={handleLocationChange}
                className="w-[90%] p-2 border shadow-lg border-gray-300 rounded mt-4"
                required
              >
                <option value="" disabled>Select a location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="w-[90%]">
              <label htmlFor="attachment" className="block text-lg font-sarif mb-1 mt-10">
                Attach file(if any):
              </label>
              <input
                type="file"
                id="attachment"
                className="w-full p-2 border shadow-lg border-gray-300 rounded mt-4"
                accept=".pdf, .doc, .docx"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 ">
          <button
            type="submit"
            className=" px-6  text-white bg-red-600  hover:bg-red-700 hover:scale-105"
          >
            <Text
              fontSize={"2xl"}
              fontWeight="bold"
              color={"white"}
              // bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
            >
              Submit
            </Text>

          </button>
          <button
            type="submit"
            className="  px-6 text-white bg-red-600  hover:bg-red-700 hover:scale-105"
          >
            <Text
              fontSize={"2xl"}
              fontWeight="bold"
              color={"white"}
              //bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
            >
              Preview
            </Text>

          </button>
          <button
            type="submit"
            className="  px-6 text-white bg-red-600  hover:bg-red-700 "
          >
            <Text
              fontSize={"2xl"}
              fontWeight="bold"
              color={"white"}
             // bgColor={"#ed1b24"}
              p={"2"}
              transform="skewX(-10deg)"
              borderRadius={"none"}
            >
              Cancel
            </Text>

          </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Complaints;