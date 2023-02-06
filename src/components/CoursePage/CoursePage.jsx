import { Box,Grid, Heading,Text,VStack} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4"

const CoursePage = () => {
    const [lectureNumber,setLectureNumber] = useState(0);
    const lectureTitle="LectureTitle";
    
    const lectures=[{_id:"asdasdasd1",title:"sample1",description:"sample desc1",video:{
        url:"sadas"
    }},
    {_id:"asdasdasd2",title:"sample2",description:"sample desc2",video:{
        url:"sadas"
    }},
    {_id:"asdasdasd3",title:"sample3",description:"sample desc3",video:{
        url:"sadas"
    }}]
 
  return <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
    <Box>
    <video  width={"100%"} controls controlsList="nodownload nofullscreen noremoteplayback"  disableRemotePlayback src={introVideo}></video>
    <Heading m="4" children={`#${lectureNumber+1} ${ lectures[lectureNumber].title}`}/>
    <Heading m="4" children="Description"/>
    <Text m="4" children={lectures[lectureNumber].description} />
    </Box>
    <VStack>
        {
            lectures.map((element,index)=>(
             <button onClick={()=>setLectureNumber(index)} key={element._id}
              style={{
                width:"100%",
                padding:"1rem",
                textAlign:"center",
                margin:0,
                borderBottom:"1px solid rgba(0,0,0,0.2)"

              }}>
                <Text noOfLines={1}>
                    #{index+1} {element.title}
                </Text>
             </button>
            ))
        }
    </VStack>
   </Grid>
}

export default CoursePage