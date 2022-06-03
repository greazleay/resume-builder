import { useResume } from '../../context/app.context';
import { Badge, Flex, Stack, Text, VStack } from '@chakra-ui/react';

export const PreviewEducation = () => {

    const { educationList } = useResume();

    return (
        <Flex direction='column' justifyContent='space-around' textAlign='left' padding={4} maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Badge variant='outline' colorScheme='purple'>EDUCATION</Badge>
            <Stack spacing={6}>
                {educationList.map((education, index) => {
                    return (
                        <VStack key={index} spacing={6}>
                            <Text>{education.schoolName}</Text>
                            <Text>{education.fieldOfStudy}</Text>
                            <Text>{education.startYear} - {education.endYear}</Text>
                            <Text>{education.grade}</Text>
                        </VStack>
                    )
                })}
            </Stack>
        </Flex>
    )
}