import React from 'react'

const EmoTariff = () => {
    return (
        <div className="mx-auto">
            <table className="w-600 border border-collapse mx-auto" align="center" cellSpacing="1" cellPadding="8">
                <tr>
                    <td className="Head" colSpan="4">
                        Slab
                    </td>
                    <td className="Head" colSpan="4">
                        Rate of Commission
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        Upto Rs. 1,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 60
                    </td>
                </tr>
                <tr>
                    <td className="altrow" colSpan="4">
                        From 1,001 and upto Rs. 25,00
                    </td>
                    <td className="altrow" colSpan="4">
                        Rs. 100
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 25,01 and upto Rs. 5,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 150
                    </td>
                </tr>
                <tr>
                    <td className="altrow" colSpan="4">
                        From 5,001 and upto Rs.10,000
                    </td>
                    <td className="altrow" colSpan="4">
                        Rs. 250
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 10,001 and upto Rs. 15,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 300
                    </td>
                </tr>
                <tr>
                    <td className="altrow" colSpan="4">
                        From 15,001 and upto Rs. 20,000
                    </td>
                    <td className="altrow" colSpan="4">
                        Rs. 350
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 20,001 and upto Rs. 30,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 450
                    </td>
                </tr>
                <tr>
                    <td className="altrow" colSpan="4">
                        From 30,001 and upto Rs. 40,000
                    </td>
                    <td className="altrow" colSpan="4">
                        Rs. 500
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 40,001 and upto Rs. 50,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 600
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 50,001 and upto Rs. 75,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 800
                    </td>
                </tr>
                <tr>
                    <td className="row" colSpan="4">
                        From 75,001 and upto Rs. 100,000
                    </td>
                    <td className="row" colSpan="4">
                        Rs. 1000
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default EmoTariff