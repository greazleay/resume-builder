export interface IResumeContext {
    biodata: { [key: string]: string };
    educationList: { [key: string]: string }[];
    experienceList: { [key: string]: string }[];
    addEducation: () => void;
    addExperience: () => void;
    handleBiodataChange: (event: any) => void;
    manageEducationList: (event: any, index: number) => void;
    manageExperienceList: (event: any, index: number) => void;
}