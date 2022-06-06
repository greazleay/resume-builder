import { Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';
import { CgChevronRight } from 'react-icons/cg';
import styles from '../styles/index.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>

            <Heading as='h3' size='lg' fontFamily='Pacifico' fontWeight='thin' color='purple.500'>Resume Builder</Heading>

            <Breadcrumb spacing='8px' separator={<CgChevronRight color='gray.500' />} fontFamily='Poppins' fontWeight={'bold'} fontSize='lg'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </header>
    )
}