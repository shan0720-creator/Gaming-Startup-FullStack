import React from 'react'
import {background, HStack, Stack, VStack} from "@chakra-ui/react"
import { Heading,Text
    ,Button,Image} from '@chakra-ui/react'
import "./home.css"
import vg from "../../assets/images/valo.png"
import { Box } from '@chakra-ui/react'
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {FaUnity} from "react-icons/fa"
import {SiCoursera,SiUnrealengine,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"
import { Link } from 'react-router-dom'

const Home = () => {
   return <section className="home">
    <div className="container" >
    <Stack direction={["column","row"]}
    height="100%"
    justifyContent={["center","space-between"]}
    alignItems="center"
     spacing={["16","56"]}>
    <VStack width={"full"} alignItems={["center","flex-end"]}>
    <Heading children="LEARN FROM THE INDUSTRY LEVEL  GAME DEVELOPERS" size={"2xl"}/>
    <Text textAlign={["center","left"]}  children="Find valuable Content for Absolutely Free"/>
    <Link to="/courses">
    <Button size={"lg"} colorScheme="yellow">
            Explore Now
        </Button>
    </Link>
    </VStack>
    <Image className='vector-graphics'boxSize={"md"} src={vg} objectFit="contain"/>
    </Stack>
    
    </div>
    <Box padding={'8'} bg="blackAlpha.800">
        <Heading textAlign={"center"} fontFamily="body" color ={"yellow.400"} children="OUR BRANDS" />
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop="4">
         <CgGoogle/>
         <CgYoutube/>
         <SiUdemy/>
         <SiUnrealengine/>
         <FaUnity/>

        </HStack>
    </Box>
    <div className="container2">
    <video  controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback src={introVideo}></video>
    </div>
   </section>

}

export default Home