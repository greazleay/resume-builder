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
} from '@chakra-ui/react'
import { useResume } from '../context/app.context';

export default function Education() {

    const { educationList, addEducation, manageEducationList } = useResume();

    return (
        <div>
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
                        </AccordionItem>
                    )
                })}
            </Accordion>
            <Button colorScheme='teal' mt={4} type="button" onClick={addEducation}>Add More</Button>
        </div>
    )
}