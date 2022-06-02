export interface ISkill {
    skillName: string,
    skillLevel: string
}

export interface IResumeContext {
    biodata: { [key: string]: string };
    handleBiodataChange: (event: any) => void;

    educationList: { [key: string]: string }[];
    addEducation: () => void;
    manageEducationList: (event: any, index: number) => void;

    experienceList: { [key: string]: string }[];
    addExperience: () => void;
    manageExperienceList: (event: any, index: number) => void;

    skillsList: ISkill[];
    addSkill: (event: any) => void;
    removeSkill: (id: number) => void;
}