import { Text, Flex, Stack, Badge } from '@chakra-ui/react'
import { useResume } from '../../context/app.context';

export const PreviewBiodata = () => {
    
    const { biodata } = useResume();
    
    return (
        <Flex direction='column' justifyContent='space-around' textAlign='left' padding={4} maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Badge variant='outline' colorScheme='purple'>PERSONAL DETAILS</Badge>
            <Stack spacing={6}>
                <Text>{biodata.firstName} {biodata.lastName}</Text>
                <Text>{biodata.role}</Text>
                <Text>{biodata.emailAddress}</Text>
                <Text>{biodata.phoneNumber}</Text>
                <Text>{biodata.address}</Text>
            </Stack>
        </Flex>
    )
}