import React from 'react';

function PostalRestHouse() {
    return (
        <div className="text-center mx-4 my-8">
            <h1 className="text-2xl font-bold mb-4">POSTAL REST HOUSE FACILITY AVAILABLE FOR THE GENERAL PUBLIC</h1>

            <table className="w-[70%] mx-auto border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border">Category</th>
                        <th className="py-2 px-4 border">Rent per day</th>
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
                    <p>Ahsan Waheed Bajwa<br />Superintendent (Development) <br /> Dte-General, Pakistan Post, Islamabad.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold">Contact No:</p>
                    <p>051-9261937</p>
                    <p className="font-semibold mt-5">WhatsApp:</p>
                    <p>051-9261937</p>
                </div>
            </div>

            <div className="w-[70%] m-[auto]" >
                <div className="  mt-8 text-left">
                    <h2 className="font-semibold text-xl mb-4">Reservation Terms and Conditions:</h2>
                    <ul className=" list-disc ml-6">
                        <li>The detail and categories of rest houses can be seen below:-</li>
                        <li>Check-in time will be 12:00 pm (Noon) and check-out time will be 10:00 am. The charges will have to be paid accordingly.</li>
                        <li>Reservation will only be made through WhatsApp at the following address/number: 0321-44446309 during office working hours i.e. 08:00 am to 04:00 pm. No booking will be made after office hours.</li>
                        <li>Rooms can be reserved for a maximum of 05 days.</li>
                        <li>Maximum 02 persons are allowed in a room with a maximum of 02 minor children up to the age of 10 years.</li>
                        <li>The applicants shall produce copies of Reservation Slip / ACG-67 (rent payment receipt), CNIC, and Official Card to the Focal Person of Directorate General for the room reservation. A copy will also be provided to the focal person of the rest house at the spot.</li>
                        <li>The request for cancellation of reservation should be submitted before 48 hours of the check-in time. The cancellation will be subject to a deduction of 25% from the amount of rent so paid, while the requests submitted within 48 hours will not be entertained.</li>
                        <li>Please keep Original CNIC/and Official Card/other documents with you for the purpose of security and identification.</li>
                        <li>Any illegal/criminal activity will be dealt under the law.</li>
                        <li><strong>Please note that the reservation is made on a provisional basis and Pakistan Post reserves the right to cancel it before 48 hours of occupation with a full refund and intimation to the allottee</strong>.</li>
                    </ul>
                </div>
            </div>




            <p className="w-[70%] m-[auto] mt-9 mb-8 text-left font-bold">Category wise list of Rest Houses of Pakistan Post for renting out to general public</p>

            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border text-center">Name of Rest House and City</th>
                        <th className="py-2 px-4 border text-center">Room No</th>
                        <th className="py-2 px-4 border text-center">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="4">Kashmir Road, Karachi</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">4</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Gulshan-e-Iqbal, Karachi</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowspan="6">Mall road , Multan</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">4</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">5</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">6</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Jhelum</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Attock</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Mianwali</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Saddar Rawalpindi</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Murree GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Peshawar, Jheel Road</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="4">NathiaGali</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">4</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Saidu Sharif</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">C</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Chitral</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Abbottabad</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Ayubia</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Kohat</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Bannu</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">C</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">D.I.Khan GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Hyderabad Circle Office</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Mirpur Khas</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Sukkur Regional Office</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Quetta GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Ziarat</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">C</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Sorab</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Amri</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Taftan</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Kalat</td>
                        <td sclassName="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Muzaffarabad</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Mirpur</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Kotli</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Gilgit</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Sust</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Skardu</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Layyah</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="4">Shadman Lahore</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">4</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="6">Lahore Cantt</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">4</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">5</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">6</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Sialkot GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="2">Gujrat GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="3">Faisalabad GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">2</td>
                        <td className="py-2 px-4 border">A</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">3</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border" rowSpan="1">Sargodha GPO</td>
                        <td className="py-2 px-4 border">1</td>
                        <td className="py-2 px-4 border">B</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PostalRestHouse;
