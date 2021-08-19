import React from "react"

function DisplayExperience(props) {
    return (
        <section>
            <p>Company Name: {props.data.company}</p>
            <p>{props.data.jobTitle}</p>
            <p>From: {props.data.startDate}</p>
            <p>To: {props.data.endDate}</p>
            <p>{props.data.duties}</p>
        </section>
    )
}

export default DisplayExperience