import { useResume } from '../../context/app.context';
import { Badge, Flex, Stack, Text, VStack } from '@chakra-ui/react';

export const PreviewExperience = () => {

    const { experienceList } = useResume();

    return (
        <Flex direction='column' justifyContent='space-around' textAlign='left' padding={4} maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Badge variant='outline' colorScheme='purple'>EXPERIENCE</Badge>
            <Stack spacing={6}>
                {experienceList.map((experience, index) => {
                    return (
                        <VStack key={index} spacing={6}>
                            <Text>{experience.companyName}</Text>
                            <Text>{experience.jobTitle}</Text>
                            <Text>{experience.startDate} - {experience.endDate}</Text>
                            <Text>{experience.description}</Text>
                        </VStack>
                    )
                })}
            </Stack>
        </Flex>
    )
}