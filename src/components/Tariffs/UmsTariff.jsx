import React from 'react'

const UmsTariff = () => {
    return (
        <div className="flex flex-col justify-center">
            <div>
                <table className="border-collapse border border-gray-200 w-96">
                    <tr className="bg-gray-200">
                        <td colSpan="4" className="p-2 font-bold">Client Type: Regular</td>
                    </tr>
                    <tr className="text-center">
                        <td colSpan="2" className="p-2">Weight (grams)</td>
                        <td className="p-2">Tariff</td>
                    </tr>
                    <tr className="font-bold text-center">
                        <td className="p-2">From</td>
                        <td className="p-2">To</td>
                        <td className="p-2">(Rs)</td>
                    </tr>
                    <tr className="text-center">
                        <td className="p-2">1</td>
                        <td className="p-2">250</td>
                        <td className="p-2">150</td>
                    </tr>
                    <tr className="bg-gray-100 text-center">
                        <td className="p-2">251</td>
                        <td className="p-2">500</td>
                        <td className="p-2">230</td>
                    </tr>
                    <tr className="text-center">
                        <td colSpan="3" className="p-2">
                            <b>Note:</b> Additional 75 Rs. will be charged for every additional 500 gm. Tariff is inclusive of GST
                        </td>
                    </tr>
                </table></div>
            <div className="flex ">
                <table className="w-96 border border-gray-200">
                    <tr className="bg-gray-200">
                        <td colSpan="3" className="p-2 font-bold">
                            Client Type: Regular Local
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td colSpan="2" className="p-2">
                            Weight (grams)
                        </td>
                        <td className="p-2">Tariff</td>
                    </tr>
                    <tr className="font-bold text-center">
                        <td className="p-2">From</td>
                        <td className="p-2">To</td>
                        <td className="p-2">(Rs)</td>
                    </tr>
                    <tr className="text-center">
                        <td className="p-2 row">1</td>
                        <td className="p-2 row">250</td>
                        <td className="p-2 row">90</td>
                    </tr>
                    <tr className="bg-gray-100 text-center">
                        <td className="p-2 altrow">251</td>
                        <td className="p-2 altrow">500</td>
                        <td className="p-2 altrow">110</td>
                    </tr>
                    <tr className="text-center">
                        <td colSpan="3" className="p-2">
                            <b>Note:</b> Additional 45 Rs. will be charged for every additional 500 gm. Tariff is inclusive of GST.
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table className="w-3/4 border-collapse border" align="center">
                    <thead>
                        <tr className="bg-gray-200">
                            <th colSpan="4" className="py-2 px-4 text-center">
                                Client Type: Corporate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4" className="py-2 px-4">
                                <p className="font-semibold">Note: Corporate and Bulk Customers may contact local Postal Officers, Deputy Postmasters General or Postmasters General for discounted tariff</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <div className="text-xl font-bold mb-4">GST</div>
                <div className="text-left">
                    <b>Islamabad:</b> 16%<br />
                    <b>Pakhtunkhwa:</b> 15%<br />
                    <b>Punjab:</b> 16%<br />
                    <b>Sindh:</b> 13%<br />
                    <b>Balochistan:</b> 15%<br />
                </div>
            </div>


        </div>
    )
}

export default UmsTariff