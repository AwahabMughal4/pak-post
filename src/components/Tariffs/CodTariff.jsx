import React from 'react'

const CodTariff = () => {
    return (
        <div className="mx-auto">
            <div>


                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="content">
                                Fax Mail Service booking tariff shall be charged in cash for each page of letter or each page of document up to A-4 size without exception as detailed below:
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br />
                                <table className="w-3/4 mx-auto" cellSpacing="1" align="center">
                                    <tbody>
                                        <tr align="center">
                                            <td className="row">For entire country</td>
                                            <td className="row">Rs. 35/-</td>
                                        </tr>
                                        <tr align="center">
                                            <td className="row">Between Rawalpindi and Islamabad and vice versa</td>
                                            <td className="row">Rs. 20/-</td>
                                        </tr>
                                        <tr className="content" align="center">
                                            <td colSpan="3">
                                                <b>Note:</b> Additional Rs. 38 will be charged for every additional 500 gm.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mx-auto">
                <table className="w-600 border border-collapse mx-auto">
                    <tbody>
                        <tr className="content">
                            <td colSpan="3" className="title">
                                Client Type: Regular Local
                            </td>
                        </tr>
                        <tr align="center">
                            <td colSpan="2" className="Head">
                                Weight (grams)
                            </td>
                            <td className="Head">Tariff</td>
                        </tr>
                        <tr className="content" align="center" style={{ fontWeight: 'bold' }}>
                            <td>From</td>
                            <td>To</td>
                            <td>(Rs)</td>
                        </tr>
                        <tr className="content" align="center">
                            <td className="row">1</td>
                            <td className="row">250</td>
                            <td className="row">55</td>
                        </tr>
                        <tr className="content" align="center">
                            <td className="altrow">251</td>
                            <td className="altrow">500</td>
                            <td className="altrow">80</td>
                        </tr>
                        <tr className="content" align="center">
                            <td colSpan="3">
                                <b>Note:</b> Additional Rs. 18 will be charged for every additional 500 gm.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mx-auto">
                    <table className="w-600 border border-collapse mx-auto">
                        <tbody>
                            <tr className="content">
                                <td colSpan="4" className="title">
                                    <p>Client Type: Corporate Local</p>
                                    <p className="content">
                                        Note: <strong>Corporate and Bulk Customers may contact local Postal Officers, Deputy Postmasters General, or Postmasters General for discounted tariff</strong>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CodTariff