import React, { Component } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import BackButton from "../Extras/BackButton";

class EmsTariff extends Component {
  constructor() {
    super();
    this.state = {
      articleId: "",
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
      <Box p="4">
        <h1 className="text-center text-4xl p-4 text-[red] font-bold">
          {" "}
          Express Mail Service Tariff
        </h1>
        <BackButton />
        <TableContainer
          variant="striped"
          mt="4"
          w={"80%"}
          mx={"auto"}
          border={"1px solid red"}
          h={"65vh"}
          overflowY={"scroll"}
        >
          <Table>
            <Thead bgColor="var(--primary-color)" color="white">
              <Tr>
                <Th>
                  <h1 className="text-white">Country Name</h1>
                </Th>
                <Th>
                  <h1 className="text-white">For a weight upto 1000 grams</h1>
                </Th>
                <Th>
                  <h1 className="text-white">For every addl. 1000 grams</h1>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="row">
                <Td>AFGHANISTAN</Td>
                <Td>5810</Td>
                <Td>1580</Td>
              </Tr>
              <Tr className="altrow">
                <Td>ALBANIA</Td>
                <Td>7610</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Algeria</Td>
                <Td>5840</Td>
                <Td>1610</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Argentina</Td>
                <Td>7980</Td>
                <Td>4700</Td>
              </Tr>
              <Tr className="row">
                <Td>Australia</Td>
                <Td>6120</Td>
                <Td>3200</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Austria</Td>
                <Td>5510</Td>
                <Td>1380</Td>
              </Tr>
              <Tr className="row">
                <Td>AZERBAIJAN</Td>
                <Td>5440</Td>
                <Td>1220</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Bahrain</Td>
                <Td>4790</Td>
                <Td>560</Td>
              </Tr>
              <Tr className="row">
                <Td>Bangladesh</Td>
                <Td>2970</Td>
                <Td>640</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Belarus</Td>
                <Td>7990</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Belgium</Td>
                <Td>5240</Td>
                <Td>1390</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Bhutan</Td>
                <Td>7490</Td>
                <Td>5150</Td>
              </Tr>
              <Tr className="row">
                <Td>Bolivia</Td>
                <Td>9020</Td>
                <Td>5550</Td>
              </Tr>
              <Tr className="altrow">
                <Td>BOSNIA AND HERZEGOVINA</Td>
                <Td>7230</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Botswana</Td>
                <Td>7990</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Brazil</Td>
                <Td>7880</Td>
                <Td>3270</Td>
              </Tr>
              <Tr className="row">
                <Td>BULGARIA</Td>
                <Td>4680</Td>
                <Td>1210</Td>
              </Tr>
              <Tr className="altrow">
                <Td>CANADA</Td>
                <Td>6210</Td>
                <Td>3360</Td>
              </Tr>
              <Tr className="row">
                <Td>Cayman Island (Mer)</Td>
                <Td>9400</Td>
                <Td>8960</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Cayman Island</Td>
                <Td>9020</Td>
                <Td>8580</Td>
              </Tr>
              <Tr className="row">
                <Td>Chile</Td>
                <Td>8490</Td>
                <Td>4450</Td>
              </Tr>
              <Tr className="altrow">
                <Td>China</Td>
                <Td>3500</Td>
                <Td>1870</Td>
              </Tr>
              <Tr className="row">
                <Td>Costa Rica</Td>
                <Td>7230</Td>
                <Td>3850</Td>
              </Tr>
              <Tr className="altrow">
                <Td>CROATIA (Mer)</Td>
                <Td>4380</Td>
                <Td>3940</Td>
              </Tr>
              <Tr className="row">
                <Td>CROATIA</Td>
                <Td>3620</Td>
                <Td>3190</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Cuba</Td>
                <Td>7230</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Cyprus</Td>
                <Td>4980</Td>
                <Td>1130</Td>
              </Tr>
              <Tr className="altrow">
                <Td>CZECH REPUBLIC</Td>
                <Td>5700</Td>
                <Td>2610</Td>
              </Tr>
              <Tr className="row">
                <Td>Denmark</Td>
                <Td>17190</Td>
                <Td>10790</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Egypt</Td>
                <Td>4380</Td>
                <Td>910</Td>
              </Tr>
              <Tr className="row">
                <Td>Eritrea</Td>
                <Td>7990</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Ethiopia</Td>
                <Td>6160</Td>
                <Td>1560</Td>
              </Tr>
              <Tr className="row">
                <Td>Finland</Td>
                <Td>6040</Td>
                <Td>1330</Td>
              </Tr>
              <Tr className="altrow">
                <Td>France</Td>
                <Td>5500</Td>
                <Td>1850</Td>
              </Tr>
              <Tr className="row">
                <Td>Germany</Td>
                <Td>7330</Td>
                <Td>1350</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Ghana</Td>
                <Td>7190</Td>
                <Td>2010</Td>
              </Tr>
              <Tr className="row">
                <Td>Greece</Td>
                <Td>5410</Td>
                <Td>1190</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Guatemala</Td>
                <Td>6090</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Guinea Bissau</Td>
                <Td>2820</Td>
                <Td>545</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Hong Kong (Mer)</Td>
                <Td>6880</Td>
                <Td>6440</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Hungary</Td>
                <Td>5540</Td>
                <Td>1310</Td>
              </Tr>
              <Tr className="row">
                <Td>Iceland</Td>
                <Td>10030</Td>
                <Td>3230</Td>
              </Tr>
              <Tr className="altrow">
                <Td>India</Td>
                <Td>4390</Td>
                <Td>1000</Td>
              </Tr>
              <Tr className="row">
                <Td>Indonesia</Td>
                <Td>4790</Td>
                <Td>4350</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Indonesia (Mer)</Td>
                <Td>6680</Td>
                <Td>6240</Td>
              </Tr>
              <Tr className="row">
                <Td>Iran</Td>
                <Td>6160</Td>
                <Td>1930</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Iraq</Td>
                <Td>4270</Td>
                <Td>1560</Td>
              </Tr>
              <Tr className="row">
                <Td>Ireland</Td>
                <Td>6460</Td>
                <Td>1500</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Italy</Td>
                <Td>5800</Td>
                <Td>1390</Td>
              </Tr>
              <Tr className="row">
                <Td>Ivory coast</Td>
                <Td>8640</Td>
                <Td>5550</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Japan</Td>
                <Td>7440</Td>
                <Td>1620</Td>
              </Tr>
              <Tr className="row">
                <Td>Jordan</Td>
                <Td>5070</Td>
                <Td>840</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Kenya</Td>
                <Td>5290</Td>
                <Td>1060</Td>
              </Tr>
              <Tr className="row">
                <Td>Korea</Td>
                <Td>6330</Td>
                <Td>1340</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Kuwait</Td>
                <Td>3800</Td>
                <Td>710</Td>
              </Tr>
              <Tr className="row">
                <Td>Kyrgyzstan</Td>
                <Td>6920</Td>
                <Td>2690</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Lao PDR</Td>
                <Td>5570</Td>
                <Td>5130</Td>
              </Tr>
              <Tr className="row">
                <Td>Lao PDR (Mer)</Td>
                <Td>7680</Td>
                <Td>7240</Td>
              </Tr>
              <Tr className="altrow">
                <Td>LATVIA</Td>
                <Td>5760</Td>
                <Td>2670</Td>
              </Tr>
              <Tr className="row">
                <Td>Luxembourg</Td>
                <Td>4590</Td>
                <Td>1500</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Macau (Mer)</Td>
                <Td>6900</Td>
                <Td>6460</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Macedonia</Td>
                <Td>7420</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Malaysia</Td>
                <Td>5800</Td>
                <Td>1010</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Maldives</Td>
                <Td>4180</Td>
                <Td>710</Td>
              </Tr>
              <Tr className="row">
                <Td>Mali</Td>
                <Td>6090</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="altrow">
                <Td>MALTA</Td>
                <Td>6560</Td>
                <Td>2670</Td>
              </Tr>
              <Tr className="row">
                <Td>Mauritania</Td>
                <Td>7990</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Mauritius</Td>
                <Td>7230</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Morocco</Td>
                <Td>6180</Td>
                <Td>2140</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Nepal</Td>
                <Td>3510</Td>
                <Td>800</Td>
              </Tr>
              <Tr className="row">
                <Td>Netherlands</Td>
                <Td>6210</Td>
                <Td>1390</Td>
              </Tr>
              <Tr className="altrow">
                <Td>New Zealand</Td>
                <Td>6280</Td>
                <Td>3700</Td>
              </Tr>
              <Tr className="row">
                <Td>Niger</Td>
                <Td>7610</Td>
                <Td>4520</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Nigeria</Td>
                <Td>5590</Td>
                <Td>1930</Td>
              </Tr>
              <Tr className="row">
                <Td>Norway</Td>
                <Td>7830</Td>
                <Td>1240</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Oman</Td>
                <Td>5190</Td>
                <Td>590</Td>
              </Tr>
              <Tr className="row">
                <Td>Philippines</Td>
                <Td>5210</Td>
                <Td>1740</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Poland</Td>
                <Td>4780</Td>
                <Td>1310</Td>
              </Tr>
              <Tr className="row">
                <Td>Portugal</Td>
                <Td>6320</Td>
                <Td>3230</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Qatar</Td>
                <Td>5280</Td>
                <Td>1430</Td>
              </Tr>
              <Tr className="row">
                <Td>Romania</Td>
                <Td>5810</Td>
                <Td>1210</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Russia</Td>
                <Td>4830</Td>
                <Td>2760</Td>
              </Tr>
              <Tr className="row">
                <Td>Rwanda</Td>
                <Td>5370</Td>
                <Td>1520</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Saudi Arabia</Td>
                <Td>5510</Td>
                <Td>910</Td>
              </Tr>
              <Tr className="row">
                <Td>Senegal</Td>
                <Td>7230</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Switzerland</Td>
                <Td>6930</Td>
                <Td>1370</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Syria</Td>
                <Td>7610</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Tanzania</Td>
                <Td>6160</Td>
                <Td>1560</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Thailand</Td>
                <Td>4960</Td>
                <Td>1230</Td>
              </Tr>
              <Tr className="row">
                <Td>Thailand (Mer)</Td>
                <Td>4230</Td>
                <Td>950</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Togo</Td>
                <Td>7990</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>Tunisia</Td>
                <Td>5350</Td>
                <Td>1500</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Turkey</Td>
                <Td>6370</Td>
                <Td>1390</Td>
              </Tr>
              <Tr className="row">
                <Td>Uganda</Td>
                <Td>5690</Td>
                <Td>1460</Td>
              </Tr>
              <Tr className="altrow">
                <Td>UKRAINE</Td>
                <Td>8740</Td>
                <Td>3760</Td>
              </Tr>
              <Tr className="row">
                <Td>United Arab Emirates</Td>
                <Td>4830</Td>
                <Td>610</Td>
              </Tr>
              <Tr className="altrow">
                <Td>United Kingdom</Td>
                <Td>7310</Td>
                <Td>1410</Td>
              </Tr>
              <Tr className="row">
                <Td>United States</Td>
                <Td>8440</Td>
                <Td>3670</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Uzbekistan</Td>
                <Td>6290</Td>
                <Td>1680</Td>
              </Tr>
              <Tr className="row">
                <Td>VIET NAM</Td>
                <Td>4150</Td>
                <Td>3710</Td>
              </Tr>
              <Tr className="altrow">
                <Td>Zimbabwe</Td>
                <Td>6420</Td>
                <Td>2950</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box w={{ base: "90%", md: "80%" }} mx={"auto"} my={"2rem"}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb="2"
            color="var(--primary-color)"
          >
            GST
          </Text>
          <div>
            <Text>
              <b>Islamabad:</b> 16%
            </Text>
            <Text>
              <b>Pakhtunkhwa:</b> 15%
            </Text>
            <Text>
              <b>Punjab:</b> 16%
            </Text>
            <Text>
              <b>Sindh:</b> 13%
            </Text>
            <Text>
              <b>Balochistan:</b> 15%
            </Text>
          </div>
        </Box>
      </Box>
    );
  }
}

export default EmsTariff;
