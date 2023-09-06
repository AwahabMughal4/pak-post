import React, { Component } from 'react';

class EmsTariff extends Component {
    constructor() {
        super();
        this.state = {
            articleId: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ articleId: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic for form submission here
    };

    render() {
        return (
            <div>
                <table width="995" border="0" align="center" cellpadding="0" cellspacing="0" style={{ background: '#FFFFFF' }}>
                    <tbody>
                        <tr>
                            <td width="777" valign="top" id="top">
                                <tr class="content">
                                    <td colspan="6" class="title">Client Types: Regular & Corporate</td>
                                </tr>
                                <tr>
                                    <td class="Head" align="center">Country Name</td>

                                    <td class="Head" align="center">For a weight upto 1000 grams</td>

                                    <td align="center" class="Head">For every addl. 1000 grams </td>
                                </tr>



                                <tr class='row'>
                                    <td>
                                        AFGHANISTAN
                                    </td>
                                    <td>
                                        5810
                                    </td>
                                    <td>
                                        1580
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        ALBANIA
                                    </td>
                                    <td>
                                        7610
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Algeria
                                    </td>
                                    <td>
                                        5840
                                    </td>
                                    <td>
                                        1610
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Argentina
                                    </td>
                                    <td>
                                        7980
                                    </td>
                                    <td>
                                        4700
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Australia
                                    </td>
                                    <td>
                                        6120
                                    </td>
                                    <td>
                                        3200
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Austria
                                    </td>
                                    <td>
                                        5510
                                    </td>
                                    <td>
                                        1380
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        AZERBAIJAN
                                    </td>
                                    <td>
                                        5440
                                    </td>
                                    <td>
                                        1220
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Bahrain
                                    </td>
                                    <td>
                                        4790
                                    </td>
                                    <td>
                                        560
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Bangladesh
                                    </td>
                                    <td>
                                        2970
                                    </td>
                                    <td>
                                        640
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Belarus
                                    </td>
                                    <td>
                                        7990
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Belgium
                                    </td>
                                    <td>
                                        5240
                                    </td>
                                    <td>
                                        1390
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Bhutan
                                    </td>
                                    <td>
                                        7490
                                    </td>
                                    <td>
                                        5150
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Bolivia
                                    </td>
                                    <td>
                                        9020
                                    </td>
                                    <td>
                                        5550
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        BOSNIA AND HERZEGOVINA
                                    </td>
                                    <td>
                                        7230
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Botswana
                                    </td>
                                    <td>
                                        7990
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Brazil
                                    </td>
                                    <td>
                                        7880
                                    </td>
                                    <td>
                                        3270
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        BULGARIA
                                    </td>
                                    <td>
                                        4680
                                    </td>
                                    <td>
                                        1210
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        CANADA
                                    </td>
                                    <td>
                                        6210
                                    </td>
                                    <td>
                                        3360
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Cayman Island (Mer)
                                    </td>
                                    <td>
                                        9400
                                    </td>
                                    <td>
                                        8960
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Cayman Island
                                    </td>
                                    <td>
                                        9020
                                    </td>
                                    <td>
                                        8580
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Chile
                                    </td>
                                    <td>
                                        8490
                                    </td>
                                    <td>
                                        4450
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        China
                                    </td>
                                    <td>
                                        3500
                                    </td>
                                    <td>
                                        1870
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Costa Rica
                                    </td>
                                    <td>
                                        7230
                                    </td>
                                    <td>
                                        3850
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        CROATIA (Mer)
                                    </td>
                                    <td>
                                        4380
                                    </td>
                                    <td>
                                        3940
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        CROATIA
                                    </td>
                                    <td>
                                        3620
                                    </td>
                                    <td>
                                        3190
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Cuba
                                    </td>
                                    <td>
                                        7230
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Cyprus
                                    </td>
                                    <td>
                                        4980
                                    </td>
                                    <td>
                                        1130
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        CZECH REPUBLIC
                                    </td>
                                    <td>
                                        5700
                                    </td>
                                    <td>
                                        2610
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Denmark
                                    </td>
                                    <td>
                                        17190
                                    </td>
                                    <td>
                                        10790
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Egypt
                                    </td>
                                    <td>
                                        4380
                                    </td>
                                    <td>
                                        910
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Eritrea
                                    </td>
                                    <td>
                                        7990
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Ethiopia
                                    </td>
                                    <td>
                                        6160
                                    </td>
                                    <td>
                                        1560
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Finland
                                    </td>
                                    <td>
                                        6040
                                    </td>
                                    <td>
                                        1330
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        France
                                    </td>
                                    <td>
                                        5500
                                    </td>
                                    <td>
                                        1850
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Germany
                                    </td>
                                    <td>
                                        7330
                                    </td>
                                    <td>
                                        1350
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Ghana
                                    </td>
                                    <td>
                                        7190
                                    </td>
                                    <td>
                                        2010
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Greece
                                    </td>
                                    <td>
                                        5410
                                    </td>
                                    <td>
                                        1190
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Guatemala
                                    </td>
                                    <td>
                                        6090
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Guinea Bissau
                                    </td>
                                    <td>
                                        2820
                                    </td>
                                    <td>
                                        545
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Hong Kong (Mer)
                                    </td>
                                    <td>
                                        6880
                                    </td>
                                    <td>
                                        6440
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Hong Kong
                                    </td>
                                    <td>
                                        5550
                                    </td>
                                    <td>
                                        5110
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Hungary
                                    </td>
                                    <td>
                                        5540
                                    </td>
                                    <td>
                                        1310
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Iceland
                                    </td>
                                    <td>
                                        10030
                                    </td>
                                    <td>
                                        3230
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        India
                                    </td>
                                    <td>
                                        4390
                                    </td>
                                    <td>
                                        1000
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Indonesia
                                    </td>
                                    <td>
                                        4790
                                    </td>
                                    <td>
                                        4350
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Indonesia (Mer)
                                    </td>
                                    <td>
                                        6680
                                    </td>
                                    <td>
                                        6240
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Iran
                                    </td>
                                    <td>
                                        6160
                                    </td>
                                    <td>
                                        1930
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Iraq
                                    </td>
                                    <td>
                                        4270
                                    </td>
                                    <td>
                                        1560
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Ireland
                                    </td>
                                    <td>
                                        6460
                                    </td>
                                    <td>
                                        1500
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Italy
                                    </td>
                                    <td>
                                        5800
                                    </td>
                                    <td>
                                        1390
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Ivory coast
                                    </td>
                                    <td>
                                        8640
                                    </td>
                                    <td>
                                        5550
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Japan
                                    </td>
                                    <td>
                                        7440
                                    </td>
                                    <td>
                                        1620
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Jordan
                                    </td>
                                    <td>
                                        5070
                                    </td>
                                    <td>
                                        840
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Kenya
                                    </td>
                                    <td>
                                        5290
                                    </td>
                                    <td>
                                        1060
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Korea
                                    </td>
                                    <td>
                                        6330
                                    </td>
                                    <td>
                                        1340
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Kuwait
                                    </td>
                                    <td>
                                        3800
                                    </td>
                                    <td>
                                        710
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Kyrgyzstan
                                    </td>
                                    <td>
                                        6920
                                    </td>
                                    <td>
                                        2690
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Lao PDR
                                    </td>
                                    <td>
                                        5570
                                    </td>
                                    <td>
                                        5130
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Lao PDR (Mer)
                                    </td>
                                    <td>
                                        7680
                                    </td>
                                    <td>
                                        7240
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        LATVIA
                                    </td>
                                    <td>
                                        5760
                                    </td>
                                    <td>
                                        2670
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Luxembourg
                                    </td>
                                    <td>
                                        4590
                                    </td>
                                    <td>
                                        1500
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Macau (Mer)
                                    </td>
                                    <td>
                                        6900
                                    </td>
                                    <td>
                                        6460
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Macau
                                    </td>
                                    <td>
                                        6140
                                    </td>
                                    <td>
                                        5710
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Macedonia
                                    </td>
                                    <td>
                                        7420
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Malaysia
                                    </td>
                                    <td>
                                        5800
                                    </td>
                                    <td>
                                        1010
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Maldives
                                    </td>
                                    <td>
                                        4180
                                    </td>
                                    <td>
                                        710
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Mali
                                    </td>
                                    <td>
                                        6090
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        MALTA
                                    </td>
                                    <td>
                                        6560
                                    </td>
                                    <td>
                                        2670
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Mauritania
                                    </td>
                                    <td>
                                        7990
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Mauritius
                                    </td>
                                    <td>
                                        7230
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Morocco
                                    </td>
                                    <td>
                                        6180
                                    </td>
                                    <td>
                                        2140
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Nepal
                                    </td>
                                    <td>
                                        3510
                                    </td>
                                    <td>
                                        800
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Netherlands
                                    </td>
                                    <td>
                                        6210
                                    </td>
                                    <td>
                                        1390
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        New Zealand
                                    </td>
                                    <td>
                                        6280
                                    </td>
                                    <td>
                                        3700
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Niger
                                    </td>
                                    <td>
                                        7610
                                    </td>
                                    <td>
                                        4520
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Nigeria
                                    </td>
                                    <td>
                                        5590
                                    </td>
                                    <td>
                                        1930
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Norway
                                    </td>
                                    <td>
                                        7830
                                    </td>
                                    <td>
                                        1240
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Oman
                                    </td>
                                    <td>
                                        5190
                                    </td>
                                    <td>
                                        590
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Philippines
                                    </td>
                                    <td>
                                        5210
                                    </td>
                                    <td>
                                        1740
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Poland
                                    </td>
                                    <td>
                                        4780
                                    </td>
                                    <td>
                                        1310
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Portugal
                                    </td>
                                    <td>
                                        6320
                                    </td>
                                    <td>
                                        3230
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Qatar
                                    </td>
                                    <td>
                                        5280
                                    </td>
                                    <td>
                                        1430
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Romania
                                    </td>
                                    <td>
                                        5810
                                    </td>
                                    <td>
                                        1210
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Russia
                                    </td>
                                    <td>
                                        4830
                                    </td>
                                    <td>
                                        2760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Rwanda
                                    </td>
                                    <td>
                                        5370
                                    </td>
                                    <td>
                                        1520
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Saudi Arabia
                                    </td>
                                    <td>
                                        5510
                                    </td>
                                    <td>
                                        910
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Senegal
                                    </td>
                                    <td>
                                        7230
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Sierraleone (Mer)
                                    </td>
                                    <td>
                                        7610
                                    </td>
                                    <td>
                                        7170
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Sierraleone
                                    </td>
                                    <td>
                                        6470
                                    </td>
                                    <td>
                                        6030
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Singapore
                                    </td>
                                    <td>
                                        5170
                                    </td>
                                    <td>
                                        4730
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Somalia (Mer)
                                    </td>
                                    <td>
                                        3890
                                    </td>
                                    <td>
                                        3450
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Somalia
                                    </td>
                                    <td>
                                        3320
                                    </td>
                                    <td>
                                        2880
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        South Africa
                                    </td>
                                    <td>
                                        5780
                                    </td>
                                    <td>
                                        2310
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Spain
                                    </td>
                                    <td>
                                        5570
                                    </td>
                                    <td>
                                        1540
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Srilanka
                                    </td>
                                    <td>
                                        3780
                                    </td>
                                    <td>
                                        690
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Srilanka
                                    </td>
                                    <td>
                                        5010
                                    </td>
                                    <td>
                                        1060
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Sudan
                                    </td>
                                    <td>
                                        6160
                                    </td>
                                    <td>
                                        1560
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Sweden
                                    </td>
                                    <td>
                                        7810
                                    </td>
                                    <td>
                                        1310
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Switzerland
                                    </td>
                                    <td>
                                        6930
                                    </td>
                                    <td>
                                        1370
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Syria
                                    </td>
                                    <td>
                                        7610
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Tanzania
                                    </td>
                                    <td>
                                        6160
                                    </td>
                                    <td>
                                        1560
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Thailand
                                    </td>
                                    <td>
                                        4960
                                    </td>
                                    <td>
                                        1230
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Thailand
                                    </td>
                                    <td>
                                        4230
                                    </td>
                                    <td>
                                        950
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Togo
                                    </td>
                                    <td>
                                        7990
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Tunisia
                                    </td>
                                    <td>
                                        5350
                                    </td>
                                    <td>
                                        1500
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Turkey
                                    </td>
                                    <td>
                                        6370
                                    </td>
                                    <td>
                                        1390
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        Uganda
                                    </td>
                                    <td>
                                        5690
                                    </td>
                                    <td>
                                        1460
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        UKRAINE
                                    </td>
                                    <td>
                                        8740
                                    </td>
                                    <td>
                                        3760
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        United Arab Emirates
                                    </td>
                                    <td>
                                        4830
                                    </td>
                                    <td>
                                        610
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        United Kingdom
                                    </td>
                                    <td>
                                        7310
                                    </td>
                                    <td>
                                        1410
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        United States
                                    </td>
                                    <td>
                                        8440
                                    </td>
                                    <td>
                                        3670
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Uzbekistan
                                    </td>
                                    <td>
                                        6290
                                    </td>
                                    <td>
                                        1680
                                    </td>

                                </tr>

                                <tr class='row'>
                                    <td>
                                        VIET NAM
                                    </td>
                                    <td>
                                        4150
                                    </td>
                                    <td>
                                        3710
                                    </td>

                                </tr>

                                <tr class='altrow'>
                                    <td>
                                        Zimbabwe
                                    </td>
                                    <td>
                                        6420
                                    </td>
                                    <td>
                                        2950
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmsTariff;
