import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Button, DrawerOverlay,DrawerHeader,DrawerContent,Drawer, useDisclosure, DrawerBody, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Header.css"

 const LinkButton = ({url='/',title="Home",onClose})=>(
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"} fontSize={"20px"} colorScheme={"yellow"}>{title}</Button>
  </Link>
 )
const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role:'admin'
  };
  const logoutHandler =()=>{
   console.log('Logout');
    onClose();
  }
  return (
    <>
    <ColorModeSwitcher />
    <Button onClick={onOpen} colorScheme={'yellow'} width="12" height={"12"} rounded="full" position={"fixed"} top="6" left="6" zIndex={"overlay"}>
      <RiMenu5Fill/>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} className="Drawer">
      <DrawerOverlay backdropFilter={'blur(5px)'}/>
      <DrawerContent>
        <DrawerHeader className='Draw' borderBottomWidth={'1px'}>Courses</DrawerHeader>
        <DrawerBody className='dbody'>
          <VStack spacing={'4'} alignItems="flex-start" >
           <LinkButton onClose={onClose} url="/" title="Home" className="button"/>
           <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" className="button" />
           <LinkButton onClose={onClose} url="/request" title="Grab a Pack" className="button"/>
           <LinkButton onClose={onClose} url="/contact" title="Contact Us" className="button" />
           <LinkButton onClose={onClose} url="/about" title="About" />
           <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
            {isAuthenticated?(<>
            <VStack>
              <HStack >
                <Link onclick={onClose} to="/profile">
                  <Button variant={"ghost"} colorScheme={"yellow"} fontSize={"19px"} letterSpacing={"1px"}>
                    Profile
                  </Button>
                </Link>
                <Button variant={"ghost"} colorScheme={"yellow"} fontSize={"19px"} letterSpacing={"1px"} onClick={logoutHandler}>
                  <RiLogoutBoxLine/>
                    Logout
                  </Button>
              </HStack>
              {
                user && user.role==="admin" && <Link onClick={onClose}to="/admin/dashboard">
                  <Button fontSize={"22px"} letterSpacing={"1px"} colorScheme="purple">
                    <RiDashboardFill style={{margin:"4px"}}/>
                    Dashboard
                  </Button>
                </Link>
              }
            </VStack>
            </>):(<>
             <Link onClick={onClose} to="/login">
              <Button colorScheme={'yellow'}>Login</Button>
              </Link>
             <p className='para'>OR</p>
              <Link onClick={onClose} to="/register">
              <Button colorScheme={'yellow'}>Sign Up</Button>
              </Link></>)}
           </HStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </Button>
    </>
  )
}

export default Header