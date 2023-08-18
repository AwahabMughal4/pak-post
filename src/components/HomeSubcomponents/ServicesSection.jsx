import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import ServicesLeft from './ServicesLeft'
import ServicesRight from './ServicesRight'

const ServicesSection = () => {
  return (
    <>
        <Center>
            <Heading m={"auto"} display={"inline-block"} borderBottom={"2px solid red"} p={"2"}>Services</Heading>
        </Center>
        <ServicesLeft/>
        <ServicesRight/>
    </>
  )
}

export default ServicesSection