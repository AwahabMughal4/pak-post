import React from 'react'

const UmoTariff = () => {
    return (
        <div className="mx-auto">
            <table className="w-995 border border-solid border-gray-200 bg-white" align="center" cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td colSpan="3" valign="top" className="main">
                            <div id="main" className="justify">
                                <table width="100%">
                                    <tr>
                                        <td className="title">UMO Tariff</td>
                                        <td className="title" align="right">
                                            <a href="../tariffs.asp">Back</a>
                                        </td>
                                    </tr>
                                </table>
                                <div className="justify">
                                    <b>
                                        <table
                                            className="border border-collapse mx-auto"
                                            width="587"
                                            cellSpacing="1"
                                            cellPadding="8"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        height="65"
                                                        colSpan="3"
                                                        className="title"
                                                    >
                                                        <strong>Urgent Money Order Service (UMO) Fee/Commission (Local &amp; City-To-City)</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="150"></td>
                                                    <td width="252"></td>
                                                    <td width="133"></td>
                                                </tr>
                                                <tr>
                                                    <td className="Head" align="center">Category</td>
                                                    <td className="Head" align="center">Value</td>
                                                    <td className="Head" align="center">Fee/Commission Chargeable</td>
                                                </tr>
                                                <tr style={{ fontWeight: 'bold' }} className="content" align="center">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="row">UMO (Local)</td>
                                                    <td className="row">Upto Rs. 10,000/-</td>
                                                    <td className="row"><b>Rs. 135/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="altrow">UMO (City to City)</td>
                                                    <td className="altrow">Upto Rs. 10,000/-</td>
                                                    <td className="altrow"><b>Rs. 175/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="row">UMO (Local)</td>
                                                    <td className="row">Upto Rs. 10,001/- to Rs. 20,000/-</td>
                                                    <td className="row"><b>Rs. 160/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="altrow">UMO (City to City)</td>
                                                    <td className="altrow">Upto Rs. 10,001/- to Rs. 20,000/-</td>
                                                    <td className="altrow"><b>Rs. 200/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="row">UMO (Local)</td>
                                                    <td className="row">Upto Rs. 20,000/- to Rs. 50,000/-</td>
                                                    <td className="row"><b>Rs. 185/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="altrow">UMO (City to City)</td>
                                                    <td className="altrow">Upto Rs. 20,000/- to Rs. 50,000/-</td>
                                                    <td className="altrow"><b>Rs. 225/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="row">UMO (Local)</td>
                                                    <td className="row">Upto Rs. 50,000/- to Rs. 100,000/-</td>
                                                    <td className="row"><b>Rs. 210/-</b></td>
                                                </tr>
                                                <tr className="content" align="center">
                                                    <td className="altrow">UMO (City to City)</td>
                                                    <td className="altrow">Upto Rs. 50,000/- to Rs. 100,000/-</td>
                                                    <td className="altrow"><b>Rs. 250/-</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </b>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UmoTariff