import { useResume } from '../../context/app.context';
import { Badge, Box, Center, Flex, Wrap, WrapItem } from '@chakra-ui/react';

export const PreviewSkills = () => {

    const { skillsList } = useResume();

    return (
        <Box borderWidth={'thin'} rounded='md' padding={2}>
            <Badge variant='solid' colorScheme='purple'>SKILLS</Badge>
            <Wrap spacing={'2'}>
                {skillsList.map((skill, index) => {
                    return (
                        <WrapItem key={index}>
                            <Center w='120px' h='50px' bg='purple.200' borderRadius="md"padding={'1'} >{skill.skillName} {skill.skillLevel}</Center>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </Box>
    )
}