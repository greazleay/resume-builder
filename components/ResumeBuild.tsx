import { Box, Tabs, TabList, TabPanels, TabPanel, Tab, Text } from '@chakra-ui/react'
import { Biodata } from './builders/Biodata'
import { Education } from './builders/Education'
import { Experience } from './builders/Experience'
import { Skills } from './builders/Skills'

export const ResumeBuild = () => {
    return (
        <Box borderWidth={'medium'} rounded='md' marginBottom={'1.5'}>
            <Tabs variant='soft-rounded' colorScheme={'purple'} >

                <TabList>
                    <Tab><Text>Personal Details</Text></Tab>
                    <Tab><Text>Education</Text></Tab>
                    <Tab><Text>Work Experience</Text></Tab>
                    <Tab><Text>Skills</Text></Tab>
                </TabList>

                <TabPanels>

                    <TabPanel>
                        <Biodata />
                    </TabPanel>

                    <TabPanel>
                        <Education />
                    </TabPanel>

                    <TabPanel>
                        <Experience />
                    </TabPanel>

                    <TabPanel>
                        <Skills />
                    </TabPanel>

                </TabPanels>

            </Tabs>
        </Box>
    )
}