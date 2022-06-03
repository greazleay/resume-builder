import { ChangeEvent } from 'react';

export interface ISkill {
    skillName: string,
    skillLevel: string
}

export interface IResumeContext {
    biodata: { [key: string]: string };
    handleBiodataChange: (event: ChangeEvent<HTMLInputElement>) => void;

    educationList: { [key: string]: string }[];
    addEducation: () => void;
    removeEducation: (index: number) => void;
    manageEducationList: (event: ChangeEvent<HTMLInputElement>, index: number) => void;

    experienceList: { [key: string]: string }[];
    addExperience: () => void;
    removeExperience: (index: number) => void;
    manageExperienceList: (event: ChangeEvent<any>, index: number) => void;

    skillsList: ISkill[];
    addSkill: (data: ISkill) => void;
    removeSkill: (id: number) => void;

}