import React from "react";
import BioData from "./BioData";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import DisplayBio from "./DisplayBio";
import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import { Job, Institution } from "./componentsData"

class MainContent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    educationList: [
      {
        id: 0,
        schoolName: "",
        course: "",
        year: "",
      },
    ],
    jobList: [
      {
        id: 0,
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        duties: "",
      },
    ],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addNewEducation = () => {
    this.setState((prevState) => {
      const updatedEducation = [...prevState.educationList, new Institution(prevState.educationList.length)];
      return {
        educationList: updatedEducation,
      };
    });
  };

  addNewJob = () => {
    this.setState((prevState) => {
      const updatedJobs = [...prevState.jobList, new Job(prevState.jobList.length)];
      return {
        jobList: updatedJobs,
      };
    });
    console.log(this.state.jobList)
  };

  manageEducation = (e, id) => {
    const { name, value } = e.target
    this.setState(prevState => {
        const updatedEducation = prevState.educationList.map(education => {
            return {
                ...education,
                [name]: education.id === id ? value : education[name]
            }
        })
        return {
            educationList: updatedEducation
        }
    })
  }

  manageJobs = (e, id) => {
    const { name, value } = e.target
    this.setState(prevState => {
        const updatedJobs = prevState.jobList.map(job => {
            return {
                ...job,
                [name]: job.id === id ? value : job[name]
            }
        })
        return {
            jobList: updatedJobs
        }
    })
  }

  render() {
    const schoolList = this.state.educationList.map((school) => (
      <Education
        data={school}
        key={school.id}
        addNewEducation={this.addNewEducation}
        manageEducation={(e) => this.manageEducation(e, school.id)}
      />
    ));

    const workExperience = this.state.jobList.map((job) => (
      <WorkExperience
        data={job}
        key={job.id}
        manageJobs={(e) => this.manageJobs(e, job.id)}
        addNewJob={this.addNewJob}
      />
    ));

    const experienceDisplay = this.state.jobList.map((item) => (
        <DisplayExperience data={item} key={item.id} />
      ));

    const educationDisplay = this.state.educationList.map((item) => (
      <DisplayEducation data={item} key={item.id} />
    ));
    return (
      <main>
        <div className="current">
          <BioData data={this.state} handleChange={this.handleChange} />
          <section>
            <h3>Education</h3>
            {schoolList}
          </section>
          <section>
            <h3>Employment History</h3>
            {workExperience}
          </section>
        </div>
        <div className="preview">
            <DisplayBio data={this.state}/>
            <hr/>
            <h3>Experience</h3>
            <hr/>
            {experienceDisplay}
            <hr/>
            <h3>Education</h3>
            {educationDisplay}
            <hr/>
        </div>
      </main>
    );
  }
}

export default MainContent;
