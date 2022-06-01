import { ReactChild } from "react";

export interface PageProps {
    addEducation?: () => void;
    bioData?: Biodata;
    children?: ReactChild;
    handleChange?: (event: any) => void;
}

interface Biodata {
    [key: string]: string;
}