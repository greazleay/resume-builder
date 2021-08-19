import React from "react";

function WorkExperience(props) {
  return (
    <article>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={props.company}
        onChange={props.manageJobs}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={props.jobTitle}
        onChange={props.manageJobs}
      />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={props.startDate}
          onChange={props.manageJobs}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={props.endDate}
          onChange={props.manageJobs}
        />
      </label>
      <textarea
        name="duties"
        placeholder="Job Responsibilities..."
        value={props.duties}
        onChange={props.manageJobs}
      ></textarea>
      <button onClick={props.addNewJob}>Add</button>
    </article>
  );
}

export default WorkExperience;
