import { Box, Container, Stack, HStack, IconButton, Text, Center } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaSmile, FaAddressCard } from 'react-icons/fa';
import styles from "../styles/index.module.css";


export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <Stack direction={'row'}>
                <Text>
                    © {new Date().getFullYear()} Pollaroid | Resume Builder
                </Text>
            </Stack>

            <Stack direction={'row'} spacing={6}>
                <IconButton aria-label='' isRound={true} as={'a'} href={'https://github.com/greazleay'} target='_blank' bg={'gray.300'}>
                    <FaGithub />
                </IconButton>
                <IconButton aria-label='' isRound={true} as={'a'} href={'https://www.linkedin.com/in/siezes/'} target='_blank' colorScheme={'blue'}>
                    <FaLinkedin />
                </IconButton>
                <IconButton aria-label='' isRound={true} as={'a'} href={'https://pollaroid.net/'} target='_blank' colorScheme={'pink'}>
                    <FaSmile />
                </IconButton>

            </Stack>
        </footer>
    )
}