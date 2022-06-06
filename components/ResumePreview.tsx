import { Box, BoxProps, Divider, forwardRef } from '@chakra-ui/react'
import { PreviewBiodata } from './previews/PreviewBiodata'
import { PreviewEducation } from './previews/PreviewEducation'
import { PreviewExperience } from './previews/PreviewExperience'
import { PreviewSkills } from './previews/PreviewSkills'

export const ResumePreview = forwardRef<BoxProps, 'div'>((props, ref) => (
    <Box ref={ref} borderWidth={'medium'} rounded='md' padding={'2'} fontFamily='Poppins' >
        <PreviewBiodata />
        <PreviewSkills />
        <PreviewExperience />
        <PreviewEducation />
    </Box>
))


