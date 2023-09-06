import React from 'react'

const FmsTariff = () => {
    return (
        <div className="mx-auto">
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
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FmsTariff