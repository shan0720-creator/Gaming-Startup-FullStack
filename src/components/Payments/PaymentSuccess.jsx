import { Container,Heading, VStack ,Box,Text,Button} from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
     <Container h="90vh" p="16">
        <Heading my="8" textAlign={"center"} bg={"yellow.400"} >You Have Pro Pack</Heading>
        <VStack boxShadow={"lg"} pb="16" alignItems={'center'} borderRadius="lg">
         <Box w="full" bg={"Yellow.400"} p="4" css={{borderRadius:'8px 8px 0 0'}}>
            <Text color={"yellow.400"}>
                Payment Success
            </Text>
         </Box>
         <Box p="4">
         <VStack textAlign={"center"} px="8" mt="4" spacing="8">
            <Text>
                Congratulation You are a pro member You have Joined pro Army!
            </Text>
            <Heading size={'4xl'}>
                <RiCheckboxCircleFill/>
            </Heading>
         </VStack>
         </Box>
         <Link to="/profile">
            <Button variant={"ghost"}>Go to Profile</Button>
         </Link>
         <Heading size={"m"}>
            Reference : 232992933989
         </Heading>
        </VStack>
     </Container>
  )
}

export default PaymentSuccess