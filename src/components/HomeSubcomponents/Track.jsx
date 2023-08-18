import React from 'react'
import { Button, FormControl, FormLabel, HStack, Input, Stack, VStack} from '@chakra-ui/react'
import Buttons from './Buttons'



const Track = () => {
  return (
    <VStack m={"1rem"} p={"1rem"}>
      <Stack w={"70%"}>
        <FormControl w={"70%"} m={"auto"} p={"auto"} mt={"0"} >
          <HStack>
          <Input type='text' borderColor={"black.200"} focusBorderColor='#ED1B24' transform="skewX(-10deg)" borderRadius={"none"} placeholder='Enter your tracking id' h={"50px"}/>
          <Button backgroundColor={"#ED1B24"} color={"white"} ml={"0"} h={"50px"} w={"100px"} transform="skewX(-10deg)" borderRadius={"none"} css={{
            "&:hover":{
              backgroundColor: '#ca242d'
            }
            }}
          >Track</Button >
          </HStack>
          <FormLabel mt={"10px"} mb={"20px"} fontWeight={"bold"}>Search or Track Packages</FormLabel>
        </FormControl>
      </Stack>
      <HStack w={"50%"} p={"1rem"} justifyContent={"space-between"}>
        <Buttons heading="Calculate Postage" link={"postage"}/>
        <Buttons heading="Locate Us" link={"locate"}/>
        <Buttons heading="Find Postal Code" link={"post-code"}/>
      </HStack>
    </VStack>
  )
}

export default Track