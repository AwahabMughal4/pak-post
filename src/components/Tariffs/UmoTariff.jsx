import React from 'react';
import {
    Box,
    Table,
    Tbody,
    Tr,
    Td,
    Text,
    TableCaption,
} from '@chakra-ui/react';

const UmoTariff = () => {
    return (
        <Box mx="auto">
            <Table
                w="100%"
                borderWidth="1px"
                borderColor="gray.200"
                bg="white"
                align="center"
                cellPadding="0"
                cellSpacing="0"
            >
                <Tbody>
                    <Tr>
                        <Td colSpan="3" valign="top" className="main">
                            <div id="main" className="justify">
                                <Table width="100%">
                                    <Tr>
                                        <h1 className='text-center text-4xl p-4'> UMO Tariff</h1>
                                    </Tr>
                                </Table>
                                <div className="justify">
                                    <Table
                                        className="border border-collapse mx-auto"
                                        width="587px"
                                        cellSpacing="1"
                                        cellPadding="8"
                                    >
                                        <TableCaption>
                                            <Tr>
                                                <Td
                                                    height="65"
                                                    colSpan="3"
                                                    className="title"
                                                    fontSize="xl"
                                                >
                                                    <strong>
                                                        Urgent Money Order Service (UMO) Fee/Commission (Local &amp; City-To-City)
                                                    </strong>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td width="150"></Td>
                                                <Td width="252"></Td>
                                                <Td width="133"></Td>
                                            </Tr>
                                            <Tr>
                                                <Td className="Head" align="center">
                                                    Category
                                                </Td>
                                                <Td className="Head" align="center">
                                                    Value
                                                </Td>
                                                <Td className="Head" align="center">
                                                    Fee/Commission Chargeable
                                                </Td>
                                            </Tr>
                                        </TableCaption>
                                        <Tr style={{ fontWeight: 'bold' }} className="content" align="center">
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="row">UMO (Local)</Td>
                                            <Td className="row">Upto Rs. 10,000/-</Td>
                                            <Td className="row">
                                                <strong>Rs. 135/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="altrow">UMO (City to City)</Td>
                                            <Td className="altrow">Upto Rs. 10,000/-</Td>
                                            <Td className="altrow">
                                                <strong>Rs. 175/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="row">UMO (Local)</Td>
                                            <Td className="row">Upto Rs. 10,001/- to Rs. 20,000/-</Td>
                                            <Td className="row">
                                                <strong>Rs. 160/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="altrow">UMO (City to City)</Td>
                                            <Td className="altrow">Upto Rs. 10,001/- to Rs. 20,000/-</Td>
                                            <Td className="altrow">
                                                <strong>Rs. 200/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="row">UMO (Local)</Td>
                                            <Td className="row">Upto Rs. 20,000/- to Rs. 50,000/-</Td>
                                            <Td className="row">
                                                <strong>Rs. 185/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="altrow">UMO (City to City)</Td>
                                            <Td className="altrow">Upto Rs. 20,000/- to Rs. 50,000/-</Td>
                                            <Td className="altrow">
                                                <strong>Rs. 225/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="row">UMO (Local)</Td>
                                            <Td className="row">Upto Rs. 50,000/- to Rs. 100,000/-</Td>
                                            <Td className="row">
                                                <strong>Rs. 210/-</strong>
                                            </Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td className="altrow">UMO (City to City)</Td>
                                            <Td className="altrow">Upto Rs. 50,000/- to Rs. 100,000/-</Td>
                                            <Td className="altrow">
                                                <strong>Rs. 250/-</strong>
                                            </Td>
                                        </Tr>
                                    </Table>
                                </div>
                            </div>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
};

export default UmoTariff;
