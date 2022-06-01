import { useForm } from "react-hook-form";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react'


export default function Education() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Heading size='sm'>School</Heading>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <FormControl isInvalid={errors.schoolName}>
                                <FormLabel htmlFor='schoolName'>School Name</FormLabel>
                                <Input id='schoolName' placeholder='School Name' {...register('schoolName', { required: 'This is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.schoolName && errors.schoolName.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.degree}>
                                <FormLabel htmlFor='degree'>Degree</FormLabel>
                                <Input id='degree' placeholder='Degree' {...register('degree', { required: 'This is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.degree && errors.degree.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.startYear}>
                                <FormLabel htmlFor='startYear'>Start Year</FormLabel>
                                <Input id='startYear' placeholder='School Name' {...register('startYear', { required: 'This is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.startYear && errors.startYear.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.endYear}>
                                <FormLabel htmlFor='endYear'>End Year</FormLabel>
                                <Input id='endYear' placeholder='End Year' {...register('endYear', { required: 'This is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.endYear && errors.endYear.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.grade}>
                                <FormLabel htmlFor='grade'>Grade</FormLabel>
                                <Input id='grade' placeholder='Grade' {...register('grade', { required: 'This is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.grade && errors.grade.message}
                                </FormErrorMessage>
                            </FormControl>
                        </form>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Button colorScheme='teal' mt={4} type="button">Add More</Button>

        </div>
    )
}