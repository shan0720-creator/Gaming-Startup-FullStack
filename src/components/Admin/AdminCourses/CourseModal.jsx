import React,{useState} from 'react'
import {Box, Heading,Button,ModalFooter, Modal, ModalBody, ModalCloseButton, ModalOverlay,ModalContent,ModalHeader,Grid, Stack, Text,VStack, Input} from "@chakra-ui/react";
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({isOpen,onClose,id,addLectureHandler,deleteButtonHandler,courseTitle,lectures =[]}) => {
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[video,setVideo] = useState("");
    const[videoPrev,setVideoPrev] = useState("");

    const changeVideoHandler = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
         setVideoPrev(reader.result)
         setVideo(file)
        }
       }

   // const courseTitle = "Unreal Course"
   const handleClose = ()=>{
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    onClose();

   }
  return <Modal isOpen={isOpen} size="full" onClose={handleClose} scrollBehavior="outside">
    <ModalOverlay/>
    <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="16">
            <Grid templateColumns={["1fr","3fr 1fr"]}>
                <Box px={["0","16"]}>
                    <Box my="15">
                    <Heading children ={courseTitle} />
                    <Heading children={`#${id}`} size="sm" opacity={0.4} />
                    </Box>
                  <Heading children={"Lectures"} size="lg" />
                  <VideoCard title="Unreal Intro" description ="This is a intro lecture where you will know the basics of Game dev" num ={1} lectureId ="asas" courseId ={id} deleteButtonHandler ={deleteButtonHandler}/>

                </Box>
                <Box>
                    <form onSubmit={e=>addLectureHandler(e,id,title,description,video)}>
                        <VStack spacing={"4"}>
                             <Heading children="Add Lecture" size={"md"} textTransform="uppercase"/>
                             <Input focusBorderColor="purple.300" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                             <Input focusBorderColor="purple.300" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                             <Input accept="video/mp4*" required type={"file"} placeholder="Type Your Password" focusBorderColor="purple.300" css={{'&::file-selector-button':{...fileUploadCss,color:"purple",}}} onChange={changeVideoHandler} mt={"30px"}/>
                             {videoPrev && (
                                <video controlsList='nodownload' controls src={videoPrev} ></video>
                             )}
                             <Button w="full" colorScheme={"purple"} type="submit">Upload</Button>
                        </VStack>
                    </form>
                </Box>
            </Grid>
        </ModalBody>
        <ModalFooter><Button onClick={handleClose}>Close</Button></ModalFooter>
    </ModalContent>
  </Modal>
    
  
}

export default CourseModal

function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler} ){
    return <Stack direction={["column","row"]} my="8" borderRadius={"lg"} boxShadow={"0 0 10px rgba(107,70,193,0.5)"}justifyContent={["flex-start","space-between"]} padding={["4","8"]}>
        <Box>
            <Heading size={"sm"} children={`#${num} ${title}`} /> 
            <Text children={description}/>

        </Box>
        <Button color={"purple.600"} onClick={()=>deleteButtonHandler(courseId,lectureId)}>
            <RiDeleteBin7Fill/>

        </Button>
    </Stack>
}