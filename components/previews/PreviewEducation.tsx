import { useResume } from '@contexts/app.context';
import { Badge, Box, Stack, Text } from '@chakra-ui/react';

export const PreviewEducation = () => {

    const { educationList } = useResume();

    return (
        <Box borderWidth={'thin'} rounded='md' padding={2} >
            <Badge variant='solid' colorScheme='purple'>EDUCATION</Badge>
            <Stack spacing={6}>
                {educationList.map((education, index) => {
                    return (
                        <Stack key={index} spacing={6}>
                            <Text>{education.schoolName}</Text>
                            <Text>{education.fieldOfStudy}</Text>
                            <Text>{education.startYear} - {education.endYear}</Text>
                            <Text>{education.grade}</Text>
                        </Stack>
                    )
                })}
            </Stack>
        </Box>
    )
}