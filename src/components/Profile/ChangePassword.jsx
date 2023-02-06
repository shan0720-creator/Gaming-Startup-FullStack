import { VStack,Container,Heading,Input,Button } from '@chakra-ui/react'
import React from 'react'
import {useState} from 'react'

const ChangePassword = () => {
    const[oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
  return <Container py="16" minH={"90vh"}>
    <form>
        <Heading textTransform={"uppercase"} children="Change Password" my="16" textAlign={["center","left"]}/>
        <VStack spacing={"8"}>
        <Input required id="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} placeholder="Enter Old Password" type={"password"} focusBorderColor="yellow.500"/>
        <Input required id="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Enter New Password" type={"password"} focusBorderColor="yellow.500"/>
       <Button w="full" colorScheme={"yellow"} type="submit">Change </Button>
        </VStack>
    </form>
  </Container>
}

export default ChangePassword