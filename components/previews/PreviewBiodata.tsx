import { Box, Text, Flex, Stack, Badge } from '@chakra-ui/react'
import { useResume } from '../../context/app.context';

export const PreviewBiodata = () => {

    const { biodata } = useResume();

    return (
        <Box borderWidth={'thin'} rounded='md' padding={2}>
            <Badge variant='solid' colorScheme='purple'>PERSONAL DETAILS</Badge>
            <Stack spacing={6}>
                <Text>{biodata.firstName} {biodata.lastName}</Text>
                <Text>{biodata.role}</Text>
                <Text>{biodata.emailAddress}</Text>
                <Text>{biodata.phoneNumber}</Text>
                <Text>{biodata.address}</Text>
            </Stack>
        </Box>
    )
}