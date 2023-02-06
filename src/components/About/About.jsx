import { Avatar, Container, Heading, Stack, Text, VStack ,Button,Box,HStack} from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/videos/val.mp4"
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () =>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
    <VStack>
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQHEqheNoVYscA/profile-displayphoto-shrink_800_800/0/1671246838979?e=2147483647&v=beta&t=Ozo-Yv8T_ZR1keAtEjY_GScmSC3fVVGAqVHrbtT3G8w" boxSize={['40','48']}/>
      <Text children="Co-founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={"center"} alignItems={['center',"flex-start"]}>
        <Heading children="Shantanu Sahay" size={['md','xl']}/>
        <Text 
        textAlign={['center','left']}
        children={`Hi, I am a FullStack Developer and a Game Developer. My Mission is to provide quality content at reasonable price.`} />
    </VStack>
    </Stack>
)
const VideoPlayer =()=>(
    <Box>
        <video  controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback src={introVideo}></video>
    </Box>
)
const TandC = ({termsAndCondition})=>(
 <Box>
    <Heading size={"md"} children="Terms & Condition" textAlign={["center","left"]} my="4" />
    <Box h="sm" p="4" fontSize={"20px"} overflowY={"scroll"}>
        <Text fontFamily={"heading"}letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndCondition}</Text>
        <Heading my="4" size={"xs"} children="Refund Only Applicable for cancellation within 7 Days"/>
    </Box>
 </Box>
)
const About = () => {
  return (
     <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
        <Heading children = "About Us" textAlign={["center","left"]}/>
        <Founder />
        <Stack m="8" direction={["column","row"]} alignItems="center">
            <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
                We are a Game Developement Startup with some premium Courses available only for premium users.
            </Text>
            <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme="yellow">
                Check Our Plan
            </Button>
            </Link>
        </Stack>
        <VideoPlayer/>
        <TandC termsAndCondition={termsAndCondition} />
        <HStack my="4" p={"4"}>
            <RiSecurePaymentFill />
            <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children= {"Payment is secured by RazorPay"}/>
        </HStack>
     </Container>
  )
}

export default About