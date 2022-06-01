import { Text, Box, Flex, VStack, Stack, Badge, border } from '@chakra-ui/react'

interface PageProps {
    bioData: { [key: string]: string };
}

export default function DisplayBio({ bioData }: PageProps) {
    return (
        <Box textAlign='left' padding={1} borderRadius='md'>
            <Badge variant='outline' colorScheme='purple'>PERSONAL DETAILS</Badge>
            <Stack spacing={6}>
                <Text>{bioData.firstName} {bioData.lastName}</Text>
                <Text>{bioData.role}</Text>
                <Text>{bioData.emailAddress}</Text>
                <Text>{bioData.phoneNumber}</Text>
                <Text>{bioData.address}</Text>
            </Stack>
        </Box>
    )
}