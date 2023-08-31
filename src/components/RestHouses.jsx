import React, { useState } from "react";
import PopupCard from "./PopupCard"; // Import the PopupCard component

function PostalRestHouse() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupData, setCurrentPopupData] = useState(null);

  // Example data for rest houses
  const restHouseData = [
    {
      name: "Kashmir Road, Karachi",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        { roomNo: "4", category: "B" },

        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Gulshan e Iqbal, Karachi",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Mall Road, Multan",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        { roomNo: "4", category: "A" },
        { roomNo: "5", category: "A" },
        { roomNo: "6", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Jhelum",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Attock",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Mianwali",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Saddar Rawalpindi",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Murree GPO",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Peshawar, Jheel Road",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "NathiaGali",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        { roomNo: "4", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Saidu Sharif",
      rooms: [
        { roomNo: "1", category: "C" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Chitral",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Abottabad",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Ayubia",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Kohat",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Bannu",
      rooms: [
        { roomNo: "1", category: "C" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "D.I.Khan GPO",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Hyderabad Circle Office",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Mirpur Khas",
      rooms: [
        { roomNo: "1", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Sukkur Regional Office",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Quetta GPO",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Ziarat",
      rooms: [
        { roomNo: "1", category: "C" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Sorab",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Amri",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Taftan",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Kalat",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Muzaffarabad",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Mirpur",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Kotli",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Gilgit",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Sust",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Skardu",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Layyah",
      rooms: [
        { roomNo: "1", category: "B" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Shadman Lahore",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        { roomNo: "4", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Lahore Cantt",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        { roomNo: "4", category: "A" },
        { roomNo: "5", category: "A" },
        { roomNo: "6", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Sialkot GPO",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "A" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Gujrat GPO",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Faisalabad GPO",
      rooms: [
        { roomNo: "1", category: "A" },
        { roomNo: "2", category: "A" },
        { roomNo: "3", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
    {
      name: "Sargodha GPO",
      rooms: [
        { roomNo: "1", category: "B" },
        // ... Add other rooms for this rest house ...
      ],
    },
  ];

  const togglePopup = (data) => {
    setCurrentPopupData(data);
    setShowPopup(!showPopup);
  };

  return (
    <div className="text-center mx-4 my-8">
      <h1 className="text-2xl font-bold mb-4">
        POSTAL REST HOUSE FACILITY AVAILABLE FOR THE GENERAL PUBLIC
      </h1>

      <table className="w-[70%] mx-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-red-600">
            <th className="py-2 px-4 border text-white">Category</th>
            <th className="py-2 px-4 border text-white">Rent per day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">Category-A</td>
            <td className="py-2 px-4 border">Rs.4,000</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center text-2xl font-bold my-4 text-justify mr-80">
        <p>Reservation Procedure and Other Necessary Information:</p>
      </div>

      <div className="w-[70%] mx-auto grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Reservation Officer:</p>
          <p>
            Ahsan Waheed Bajwa
            <br />
            Superintendent (Development) <br /> Dte-General, Pakistan Post,
            Islamabad.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Contact No:</p>
          <p>051-9261937</p>
          <p className="font-semibold mt-5">WhatsApp:</p>
          <p>051-9261937</p>
        </div>
      </div>

      <div className="w-[70%] m-[auto]">
        <div className="  mt-8 text-left text-justify">
          <h2 className="font-semibold text-xl mb-4">
            Reservation Terms and Conditions:
          </h2>
          <ul className=" list-disc ml-6">
            <li>
              The detail and categories of rest houses can be seen below:-
            </li>
            <li>
              Check-in time will be 12:00 pm (Noon) and check-out time will be
              10:00 am. The charges will have to be paid accordingly.
            </li>
            <li>
              Reservation will only be made through WhatsApp at the following
              address/number: 0321-44446309 during office working hours i.e.
              08:00 am to 04:00 pm. No booking will be made after office hours.
            </li>
            <li>Rooms can be reserved for a maximum of 05 days.</li>
            <li>
              Maximum 02 persons are allowed in a room with a maximum of 02
              minor children up to the age of 10 years.
            </li>
            <li>
              The applicants shall produce copies of Reservation Slip / ACG-67
              (rent payment receipt), CNIC, and Official Card to the Focal
              Person of Directorate General for the room reservation. A copy
              will also be provided to the focal person of the rest house at the
              spot.
            </li>
            <li>
              The request for cancellation of reservation should be submitted
              before 48 hours of the check-in time. The cancellation will be
              subject to a deduction of 25% from the amount of rent so paid,
              while the requests submitted within 48 hours will not be
              entertained.
            </li>
            <li>
              Please keep Original CNIC/and Official Card/other documents with
              you for the purpose of security and identification.
            </li>
            <li>Any illegal/criminal activity will be dealt under the law.</li>
            <li>
              <strong>
                Please note that the reservation is made on a provisional basis
                and Pakistan Post reserves the right to cancel it before 48
                hours of occupation with a full refund and intimation to the
                allottee
              </strong>
              .
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-600 mt-8 w-[70%] m-auto text-white p-4 mb-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">
          Category wise list of Rest Houses of Pakistan Post for renting out to
          general public
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6 w-[70%] m-auto">
        {restHouseData.map((restHouse, index) => (
          <button
            key={index}
            className="bg-white border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 text-black font-semibold py-2 px-4 "
            onClick={() => togglePopup(restHouse)}
          >
            <div className="text-red-600 text-1xl font-sarif font-bold">
              {restHouse.name}
            </div>
            Total Rooms: {restHouse.rooms.length}
          </button>
        ))}
      </div>

      {/* Render the PopupCard component when showPopup is true */}
      {showPopup && (
        <PopupCard
          onClose={() => setShowPopup(false)}
          popupData={currentPopupData}
        />
      )}
    </div>
  );
}

export default PostalRestHouse;
