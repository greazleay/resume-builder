import { ReactNode } from 'react';
import styles from '@styles/index.module.css';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}