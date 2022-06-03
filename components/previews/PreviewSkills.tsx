import { useResume } from '../../context/app.context';
import { Badge, Center, Flex, Wrap, WrapItem } from '@chakra-ui/react';

export const PreviewSkills = () => {

    const { skillsList } = useResume();

    return (
        <Flex direction='column' justifyContent='space-around' textAlign='left' padding={4} maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Badge variant='outline' colorScheme='purple'>SKILLS</Badge>
            <Wrap>
                {skillsList.map((skill, index) => {
                    return (
                        <WrapItem key={index}>
                            <Center w='150px' h='50px' bg='purple.200' borderRadius="md">{skill.skillName} {skill.skillLevel}</Center>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </Flex>
    )
}