import { Text } from "@chakra-ui/react";
import React from "react";

const Suggestions = () => {
  return (
    <div className="mx-auto px-9 ">
      <div>
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"white"}
          bgColor={"#ed1b24"}
          p={"3"}
          transform="skewX(-10deg)"
          borderRadius={"none"}
          display={"inline-block"}
          textAlign={"center"}
          m={"4"}
        >
          Complaints & Suggestions
        </Text>
        <p className="text-base px-3">
          The complaints and suggestions can be forwarded directly to complaint
          Cell Directorate General Pakistan Post G-8/4, Islamabad through mail,
          phone, fax, E-Mail or by any other mean. While making complaint about
          any of the service please remember to provide basic details including
          article / receipt no, Place of Booking, Date of Booking, Sender,
          Receiver Name and your contact details with phone no.
        </p>
      </div>
      <div className="mt-10  mx-3 px-3">
        <Table />
      </div>
    </div>
  );
};

export default Suggestions;

const Table = () => {
  return (
    //main div
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8  ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-zinc-200">
            <table className="min-w-full text-center text-sm font-white">
              <tbody className="border-b bg-red-600  font-sans font-semibold text-white shadow-xl">
                {/* 1 */}
                <tr>
                  <th scope="col" className=" px-6 py-2 font-semibold ">
                    Sr#
                  </th>
                  <th scope="col" className=" px-6 py-2 font-semibold">
                    Circle/Region
                  </th>
                  <th scope="col" className=" px-6 py-2 font-semibold">
                    Supervisory Officer
                  </th>
                  <th scope="col" className=" px-6 py-2 font-semibold">
                    Telephone No.
                  </th>
                  <th scope="col" className=" px-6 py-2 font-semibold">
                    Telephone No.2
                  </th>
                  <th scope="col" className=" px-6 py-2 font-semibold">
                    Email Address
                  </th>
                </tr>
              </tbody>
              <tbody>
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    1
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    PMG Islamabad
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2"> APMG (FS)</td>
                  <td className="whitespace-nowrap  px-6 py-2"> 051-9261908</td>
                  <td className="whitespace-nowrap  px-6 py-2">051-9260389</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pmgibd@yahoo.com
                  </td>
                </tr>
                {/* 2 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    2
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2 ">PMG Quetta</td>
                  <td cla-ssName="whitespace-nowrap  px-6 py-2">
                    Personal Asstt. to PMG
                  </td>
                  <td cla-ssName="whitespace-nowrap  px-6 py-2">081-9211529</td>
                  <td cla-ssName="whitespace-nowrap  px-6 py-2">-</td>
                  <td cla-ssName="whitespace-nowrap  px-6 py-2">
                    Pmgquetta@yahoo.com
                  </td>
                </tr>
                {/* 3 */}

                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    3
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Lahore
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    Asstt. Director (COMP)
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    042-99213502
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    ccpmgpunjab@yahoo.com
                  </td>
                </tr>

                {/* 4 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    4
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Hyderabad
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">APMG(OP)</td>
                  <td className="whitespace-nowrap  px-6 py-2">022-9200358</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    Pmg-nschyd@yahoo.com
                  </td>
                </tr>
                {/* 5 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    5
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Multan
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">APMG</td>
                  <td className="whitespace-nowrap  px-6 py-2"> 061-9201104</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pmgmul@yahoo.com
                  </td>
                </tr>
                {/* 6 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    6
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Rawalpindi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    Asstt.Director(CC & SAV)
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2"> 051-9270049</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    adccpmgnprwp@gmail.com
                  </td>
                </tr>
                {/* 7 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    7
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG MCK Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    PMG MCK Karachi{" "}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">021-99250106</td>
                  <td className="whitespace-nowrap  px-6 py-2">021-99250110</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pmgkarachi@yahoo.com <br /> pmgpsh@pakpost.gov.pk,
                  </td>
                </tr>

                {/* 8 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    8
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Rawalpindi <br /> PMG KPK
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    Asstt. <br /> Director(COMP)
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2"> 091-9212246</td>
                  <td className="whitespace-nowrap  px-6 py-2">091-9213331</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pmgpsh@pakpost.gov.pk, <br /> ad.compt.psh@pakpost.gov.pk
                  </td>
                </tr>
                {/* 9 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    9
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    PMG Muzaffarabad
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    i. APMG <br />
                    ii. Asstt. Director <br /> (INV)
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">05822-921301</td>
                  <td className="whitespace-nowrap  px-6 py-2">05822-921304</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    ajkregion@gmail.com
                  </td>
                </tr>
                {/* 10  */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    10
                  </td>
                  <td col-span="2" className="whitespace-nowrap  px-6 py-2">
                    The Controller <br /> IMO (Parcel) <br /> Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    The Controller IMO <br /> (Parcel) Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">021-99211130</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pkkhid@gmail.com
                  </td>
                </tr>
                {/* 11 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    11
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    The Dy.Controller <br /> IMO (Letter) Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    The Dy.Controller <br /> IMO (Letter) Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    {" "}
                    021-99240532
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    gess.prime@gmail.com
                  </td>
                </tr>
                {/* 12 */}
                <tr className="shadow-xl ">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    12
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2 ">
                    The Controller <br /> IMO Lahore
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    The Controller <br /> IMO Lahore
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">042-99214632</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    parcelexportlahore@yahoo.com{" "}
                  </td>
                </tr>
                {/* 13 */}
                <tr className="shadow-xl">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    13
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2 ">
                    The Controller <br /> IMO Islamabad{" "}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    The Controller <br /> IMO Islamabad
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">051-9281273</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    pkisba@gmail.com
                  </td>
                </tr>
                {/* 14 */}
                <tr className="shadow-xl ">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    14
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2 ">
                    The Dy. Controller <br /> Foreign Post Sialkot
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    The Dy. Controller <br /> Foreign Post Sialkot
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">052-9250046 </td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    asfpskt@yahoo.com{" "}
                  </td>
                </tr>
                {/* 15 */}
                <tr className="shadow-xl ">
                  <td className="whitespace-nowrap  px-6 py-2 font-medium">
                    15
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2 ">
                    The Dy. Controller <br /> Express Post Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    The Dy. Controller <br /> Express Post Karachi
                  </td>
                  <td className="whitespace-nowrap  px-6 py-2">021-99333126</td>
                  <td className="whitespace-nowrap  px-6 py-2">-</td>
                  <td className="whitespace-nowrap  px-6 py-2">
                    dcepkhi.pakpost.gov@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
