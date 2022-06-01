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
    Textarea
} from '@chakra-ui/react'


export default function Experience() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                    <Heading size='sm'>Position</Heading>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <FormControl isInvalid={errors.company}>
                                <FormLabel htmlFor='company'>Company</FormLabel>
                                <Input id='company' placeholder='Comapny Name' {...register('company', { required: 'Company name is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.company && errors.company.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.jobTitle}>
                                <FormLabel htmlFor='jobTitle'>Job Title</FormLabel>
                                <Input id='jobTitle' placeholder='Job Title' {...register('jobTitle', { required: 'Job Title is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.jobTitle && errors.jobTitle.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.startDate}>
                                <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                <Input id='startDate' type='date' {...register('startDate', { required: 'Start date is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.startDate && errors.startDate.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.endDate}>
                                <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                <Input id='endDate' type='date' {...register('endDate', { required: 'End date is required', minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.endDate && errors.endDate.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.description}>
                                <FormLabel htmlFor='description'>Description</FormLabel>
                                <Textarea placeholder="description" {...register("description", { required: "Description is required", minLength: 1 })} />
                                <FormErrorMessage>
                                    {errors.description && errors.description.message}
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