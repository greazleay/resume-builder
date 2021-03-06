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
    IconButton,
    Box,
} from '@chakra-ui/react'
import { useResume } from '@contexts/app.context';
import { MdDeleteForever } from 'react-icons/md'

export const Education = () => {

    const { educationList, addEducation, manageEducationList, removeEducation } = useResume();

    return (
        <Box rounded={'sm'} borderWidth='1px' padding={'5'}>
            <Accordion defaultIndex={[0]} allowMultiple allowToggle>
                {educationList.map((education, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionButton>
                                <Heading size='sm'>School</Heading>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>

                                <FormControl>
                                    <FormLabel htmlFor='schoolName'>School Name</FormLabel>
                                    <Input name='schoolName' placeholder='School Name' onChange={(e) => manageEducationList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='course'>Field Of Study</FormLabel>
                                    <Input name='fieldOfStudy' placeholder='Field Of Study' onChange={(e) => manageEducationList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='startYear'>Start Year</FormLabel>
                                    <Input name='startYear' placeholder='Start Year' onChange={(e) => manageEducationList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='endYear'>End Year</FormLabel>
                                    <Input name='endYear' placeholder='End Year' onChange={(e) => manageEducationList(e, index)} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='grade'>Grade</FormLabel>
                                    <Input name='grade' placeholder='Grade' onChange={(e) => manageEducationList(e, index)} />
                                </FormControl>

                            </AccordionPanel>

                            <IconButton colorScheme={'red'} aria-label='Remove Entry' icon={<MdDeleteForever />} onClick={() => removeEducation(index)}/>

                        </AccordionItem>
                    )
                })}
            </Accordion>
            <Button colorScheme='purple' mt={4} type="button" onClick={addEducation}>Add More</Button>
        </Box>
    )
}