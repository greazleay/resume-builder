import { Box, BoxProps, forwardRef } from '@chakra-ui/react'
import { PreviewBiodata } from '@components/previews/PreviewBiodata'
import { PreviewEducation } from '@components/previews/PreviewEducation'
import { PreviewExperience } from '@components/previews/PreviewExperience'
import { PreviewSkills } from '@components/previews/PreviewSkills'

export const ResumePreview = forwardRef<BoxProps, 'div'>((props, ref) => (
    <Box ref={ref} borderWidth={'medium'} rounded='md' padding={'2'} fontFamily='Poppins' >
        <PreviewBiodata />
        <PreviewSkills />
        <PreviewExperience />
        <PreviewEducation />
    </Box>
))


