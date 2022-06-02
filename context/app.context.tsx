import { createContext, useContext } from 'react';
import { PageProps } from '../interfaces/app.interface';
import { useResumeState } from '../hooks/use-resume.state';
import { IResumeContext } from '../interfaces/resume-context.interface';

const ResumeContext = createContext<IResumeContext>(null!);

export const AppContextProvider = ({ children }: PageProps) => {

    const resume = useResumeState();

    return (
        <ResumeContext.Provider value={resume}>
            {children}
        </ResumeContext.Provider>
    );
}

export const useResume = () => useContext(ResumeContext);