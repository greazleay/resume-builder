export class SchoolDto {
    public id: number;
    public schoolName?: string;
    public course?: string;
    public startYear?: number;
    public endYear?: number;
    public grade?: string;

    constructor(id: number) {
        this.id = id;
    }
}