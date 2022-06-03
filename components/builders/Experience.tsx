import { useResume } from '../../context/app.context';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Textarea
} from '@chakra-ui/react'


export const Experience = () => {

    const { addExperience, manageExperienceList, experienceList, removeExperience } = useResume();

    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple allowToggle>
                {experienceList.map((experience, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionButton>
                                <Heading size='sm'>Position</Heading>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>

                                <FormControl>
                                    <FormLabel htmlFor='companyName'>Company</FormLabel>
                                    <Input name='companyName' placeholder='Comapny Name' onChange={(e) => manageExperienceList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='jobTitle'>Job Title</FormLabel>
                                    <Input name='jobTitle' placeholder='Job Title' onChange={(e) => manageExperienceList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                    <Input name='startDate' type='date' onChange={(e) => manageExperienceList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                    <Input name='endDate' type='date' onChange={(e) => manageExperienceList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='description'>Description</FormLabel>
                                    <Textarea placeholder="description" onChange={(e) => manageExperienceList(e, index)} />
                                </FormControl>

                            </AccordionPanel>

                            <Button colorScheme={'red'} onClick={() => removeExperience(index)}>Remove</Button>
                        
                        </AccordionItem>
                    )
                })}
            </Accordion>
            <Button colorScheme='purple' mt={4} type="button" onClick={addExperience}>Add More</Button>

        </>
    )
}