import React from 'react'

const UmsOverNight = () => {
    return (
        <div className="mx-auto">
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="title">
                            UMS Overnight Tariff
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="justify">
                <b>
                    <table className="border border-collapse mx-auto" width="587" cellSpacing="1" cellPadding="8">
                        <tbody>
                            <tr>
                                <td className="title">
                                    <br />Effective 19th June, 2023, introductory tariff for the service is as under:-
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table className="border border-collapse mx-auto" width="700">
                                        <tbody>
                                            <tr align="center">
                                                <td className="Head">Service</td>
                                                <td className="Head">250 Grams</td>
                                                <td className="Head">500 Grams</td>
                                                <td className="Head">For every additional 500 Grams</td>
                                            </tr>
                                            <tr className="content" align="center">
                                                <td style={{ fontWeight: 'bold' }} className="row">UMS Overnight Local</td>
                                                <td className="row">Rs. 89/-</td>
                                                <td className="row">Rs. 111/-</td>
                                                <td className="row">Rs. 35/-</td>
                                            </tr>
                                            <tr className="content" align="center">
                                                <td style={{ fontWeight: 'bold' }} className="row">UMS Overnight City to City</td>
                                                <td className="row">Rs. 149/-</td>
                                                <td className="row">Rs. 229/-</td>
                                                <td className="row">Rs. 113/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td className="title">
                                    <br />*Tariff is inclusive of GST.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b>
            </div>
        </div>
    )
}

export default UmsOverNight