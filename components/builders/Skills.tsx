import { useForm } from 'react-hook-form';
import { useResume } from '../../context/app.context';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Select,
    Stack,
    Tag,
    TagCloseButton,
    TagLabel,
} from '@chakra-ui/react'
import { MdArrowDropDownCircle } from 'react-icons/md';

export const Skills = () => {

    const { skillsList, addSkill, removeSkill } = useResume();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => addSkill(data);

    return (
        <Box rounded={'sm'} borderWidth='1px' padding={'5'}>
            <Stack alignItems='flex-start' spacing={4} as='form' onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.skillName}>
                    <FormLabel htmlFor='skillName'>Skill Name</FormLabel>
                    <Input id='skillName' placeholder='Skill Name' {...register('skillName', { required: 'This is required', minLength: 1 })} />
                    <FormErrorMessage>
                        {errors.skillName && errors.skillName.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.skillLevel}>
                    <FormLabel htmlFor='skillLevel'>Skill Level</FormLabel>
                    <Select placeholder='-- Select Option --' colorScheme={'blue'} icon={<MdArrowDropDownCircle />} {...register('skillLevel', { required: 'Please select a value' })}>
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Expert'>Expert</option>
                    </Select>
                    <FormErrorMessage>
                        {errors.skillLevel && errors.skillLevel.message}
                    </FormErrorMessage>
                </FormControl>


                <Button type='submit' colorScheme='purple' mt={4}>Add</Button>
            </Stack>

            <Box>
                <Heading as='h3' size='sm' mt={4}>Skills</Heading>
                <HStack spacing={4}>
                    {skillsList.map((skill, index: number) => {
                        return (
                            <Tag key={index} colorScheme='purple' size='lg' borderRadius={'lg'}>
                                <TagLabel>{skill.skillName} - {skill.skillLevel}</TagLabel>
                                <TagCloseButton onClick={() => removeSkill(index)} aria-label='Remove skill' />
                            </Tag>
                        )
                    })}
                </HStack>
            </Box>
        </Box>

    )
}