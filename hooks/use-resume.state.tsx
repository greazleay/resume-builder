import { useState, ChangeEvent } from 'react';
import { ISkill } from '../interfaces/resume-context.interface';

export const useResumeState = () => {

    const [biodata, setBiodata] = useState({
        firstName: 'John',
        lastName: 'Doe',
        role: 'Product Manager',
        emailAddress: 'someone@example.com',
        phoneNumber: '0123456789',
        address: 'Plt. 1, Block A, Lot 1, Phase 1, Sector 1, Somewhere, West World 6920091'
    })

    const [educationList, setEducationList] = useState<{ [key: string]: string }[]>([
        {
            schoolName: 'School 1',
            fieldOfStudy: 'Field Of Study 1',
            startYear: '2019',
            endYear: '2020',
            grade: 'Grade 1'
        }
    ]);

    const [experienceList, setExperienceList] = useState<{ [key: string]: string }[]>([
        {
            companyName: 'Company 1',
            jobTitle: 'Position 1',
            startDate: '2019',
            endDate: '2020',
            description: 'Description 1'
        }
    ]);

    const [skillsList, setSkillsList] = useState<ISkill[]>([
        {
            skillName: 'Skill 1',
            skillLevel: 'Beginner'
        },
        {
            skillName: 'Skill 2',
            skillLevel: 'Intermediate'

        },
        {
            skillName: 'Skill 3',
            skillLevel: 'Advanced'
        },
        {
            skillName: 'Skill 4',
            skillLevel: 'Expert'
        }
    ])

    const handleBiodataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBiodata({ ...biodata, [name]: value });
    };

    const addEducation = () => {
        const newEducationList = [...educationList, {}];
        setEducationList(newEducationList);
    }

    const manageEducationList = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const { name, value } = e.target
        const updatedEducationList = [...educationList];
        updatedEducationList[id][name] = value;
        setEducationList(updatedEducationList);
    }

    const addExperience = () => {
        const updatedExperienceList = [...experienceList, {}];
        setExperienceList(updatedExperienceList);
    }

    const manageExperienceList = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const { name, value } = e.target
        const updatedExperienceList = [...experienceList];
        updatedExperienceList[id][name] = value;
        setExperienceList(updatedExperienceList);
    }

    const addSkill = (data: ISkill) => {
        const updatedSkillsList = skillsList.some(skill => skill.skillName === data.skillName) ? skillsList : [...skillsList, data];
        setSkillsList(updatedSkillsList);
    }

    const removeSkill = (id: number) => {
        const updatedSkillsList = skillsList.filter((skill, index) => index !== id);
        setSkillsList(updatedSkillsList);
    }

    return { biodata, handleBiodataChange, addEducation, educationList, manageEducationList, addExperience, experienceList, manageExperienceList, skillsList, addSkill, removeSkill };
}