import { Box, BoxProps, Divider, forwardRef } from '@chakra-ui/react'
import { PreviewBiodata } from './previews/PreviewBiodata'
import { PreviewEducation } from './previews/PreviewEducation'
import { PreviewExperience } from './previews/PreviewExperience'
import { PreviewSkills } from './previews/PreviewSkills'

export const ResumePreview = forwardRef<BoxProps, 'div'>((props, ref) => (
    <Box borderWidth={'medium'} rounded='md' w={'max-content'} ref={ref}>
        <PreviewBiodata />
        <Divider />
        <PreviewEducation />
        <Divider />
        <PreviewExperience />
        <Divider />
        <PreviewSkills />
    </Box>
))


