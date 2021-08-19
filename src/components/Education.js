import React from "react";

function Education(props) {
  return (
    <article>
      <input
        type="text"
        name="schoolName"
        placeholder="School Name"
        value={props.schoolName}
        onChange={props.manageEducation}
      />
      <input
        type="text"
        name="course"
        placeholder="Course of Study"
        value={props.course}
        onChange={props.manageEducation}
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={props.year}
        onChange={props.manageEducation}
      />
      <button onClick={props.addNewEducation}>Add</button>
    </article>
  );
}

export default Education;
