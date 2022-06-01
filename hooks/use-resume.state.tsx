import { useState, ChangeEvent } from 'react';

export const useResumeState = () => {

    const [biodata, setBiodata] = useState({})
    const [experience, setExperience] = useState([])

    const handleBiodataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setBiodata({ ...biodata, [name]: value })
    }

    return { biodata, handleBiodataChange, experience }
}