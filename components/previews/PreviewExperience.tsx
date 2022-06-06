import { useResume } from '../../context/app.context';
import { Badge, Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';

export const PreviewExperience = () => {

    const { experienceList } = useResume();

    return (
        <Box borderWidth={'thin'} rounded='md' padding={2}>
            <Badge variant='solid' colorScheme='purple'>EXPERIENCE</Badge>
            <Stack spacing={6}>
                {experienceList.map((experience, index) => {
                    return (
                        <Stack key={index} spacing={6}>
                            <Text>{experience.companyName}</Text>
                            <Text>{experience.jobTitle}</Text>
                            <Text>{experience.startDate} - {experience.endDate}</Text>
                            <Text>{experience.description}</Text>
                        </Stack>
                    )
                })}
            </Stack>
        </Box>
    )
}