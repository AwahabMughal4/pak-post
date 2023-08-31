
import React, { useState } from "react";

const PostalCodeTable = () => {
  return (
    <div className="mx-auto px-9">
      <div>
        <h1 className="font-bold text-red-600 py-2 px-9">POSTAL CODES</h1>
      </div>
      <div className="mt-5 mx-3 px-3">
        <SearchTable1 />
        <SearchTable2/>
      </div>
    </div>
  );
};

const SearchTable1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const tableData = [
    {
      sno: 1,
      location: "ABBOTTABAD GPO",
      cityCode: "22010",
      cityPostCode: "AAW",
    },
    {
        sno: 2,
        location: "ATTOCK GPO",	
        cityCode: "43600",
        cityPostCode: "ATG",
      },
      {
        sno: 3,
        location: "BADIN GPO",		
        cityCode: "72200",
        cityPostCode: "BDN",
      },
      {
        sno: 4,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 5,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 6,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 7,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 8,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 9,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 10,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 11,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
  ];

  const filteredData = tableData.filter((row) =>
    row.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-3 py-2">
        <input
          type="text"
          className="px-2 py-1 border rounded-md"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-zinc-200">
            <div className="max-h-96 overflow-y-scroll">
              <table className="min-w-full text-center text-sm font-white">
                <tbody className="border-b bg-red-600 font-sans font-semibold text-white shadow-xl">
                  <tr>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      SNO
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      CityCode
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      CityPostCode
                    </th>
                  </tr>
                </tbody>
                {filteredData.map((row, index) => (
                  <tr key={index} className="shadow-xl">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      {row.sno}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">{row.location}</td>
                    <td className="whitespace-nowrap px-6 py-2">{row.cityCode}</td>
                    <td className="whitespace-nowrap px-6 py-2">{row.cityPostCode}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchTable2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const tableData = [
    {
      sno: 1,
      location: "ABBOTTABAD GPO",
      cityCode: "22010",
      cityPostCode: "AAW",
    },
    {
        sno: 2,
        location: "ATTOCK GPO",	
        cityCode: "43600",
        cityPostCode: "ATG",
      },
      {
        sno: 3,
        location: "BADIN GPO",		
        cityCode: "72200",
        cityPostCode: "BDN",
      },
      {
        sno: 4,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 5,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 6,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 7,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 8,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 9,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 10,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
      {
        sno: 11,
        location: "ABBOTTABAD GPO",
        cityCode: "22010",
        cityPostCode: "AAW",
      },
  ];

  const filteredData = tableData.filter((row) =>
    row.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-3 py-2">
        <input
          type="text"
          className="px-2 py-1 border rounded-md"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-zinc-200">
            <div className="max-h-96 overflow-y-scroll">
              <table className="min-w-full text-center text-sm font-white">
                <tbody className="border-b bg-red-600 font-sans font-semibold text-white shadow-xl">
                  <tr>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      SNO
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      CityCode
                    </th>
                    <th scope="col" className="px-6 py-2 font-semibold">
                      CityPostCode
                    </th>
                  </tr>
                </tbody>
                {filteredData.map((row, index) => (
                  <tr key={index} className="shadow-xl">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      {row.sno}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">{row.location}</td>
                    <td className="whitespace-nowrap px-6 py-2">{row.cityCode}</td>
                    <td className="whitespace-nowrap px-6 py-2">{row.cityPostCode}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostalCodeTable;
