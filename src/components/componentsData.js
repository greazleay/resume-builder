class Job {
    constructor(id, company, jobTitle, startDate, endDate, roles) {
        this.id = id;
        this.company = company;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.roles = roles;
    }
}

class Institution {
    constructor(id, schoolName, course, year) {
        this.id = id;
        this.schoolName = schoolName;
        this.course = course;
        this.year = year
    }
}

export { Job, Institution }