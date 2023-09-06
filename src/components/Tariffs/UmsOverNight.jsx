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

const UmsOverNight = () => {
    return (
        <Box mx="auto">
            <Table w="full">
                <Tbody>
                    <Tr>
                        <h1 className='text-center text-4xl p-4'> UMS Overnight Tariff</h1>
                    </Tr>
                </Tbody>
            </Table>
            <div className="justify">
                <b>
                    <Table
                        className="border border-collapse mx-auto"
                        width="587px"
                        cellSpacing="1"
                        cellPadding="8"
                    >
                        <TableCaption>
                            <Tr>
                                <Td className="title">
                                    <br />Effective 19th June, 2023, introductory tariff for the service is as under:-
                                </Td>
                            </Tr>
                        </TableCaption>
                        <Tr>
                            <Td>
                                <Table className="border border-collapse mx-auto" width="700">
                                    <Tbody>
                                        <Tr align="center">
                                            <Td className="Head">Service</Td>
                                            <Td className="Head">250 Grams</Td>
                                            <Td className="Head">500 Grams</Td>
                                            <Td className="Head">For every additional 500 Grams</Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td style={{ fontWeight: 'bold' }} className="row">UMS Overnight Local</Td>
                                            <Td className="row">Rs. 89/-</Td>
                                            <Td className="row">Rs. 111/-</Td>
                                            <Td className="row">Rs. 35/-</Td>
                                        </Tr>
                                        <Tr className="content" align="center">
                                            <Td style={{ fontWeight: 'bold' }} className="row">UMS Overnight City to City</Td>
                                            <Td className="row">Rs. 149/-</Td>
                                            <Td className="row">Rs. 229/-</Td>
                                            <Td className="row">Rs. 113/-</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Td>
                        </Tr>
                        <TableCaption>
                            <Tr>
                                <Td className="title">
                                    <br />*Tariff is inclusive of GST.
                                </Td>
                            </Tr>
                        </TableCaption>
                    </Table>
                </b>
            </div>
        </Box>
    );
};

export default UmsOverNight;
