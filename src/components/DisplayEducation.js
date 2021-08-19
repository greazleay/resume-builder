import React from "react"

function DisplayEducation(props) {
    return (
        <section>
            <p>{props.data.schoolName}</p>
            <p>{props.data.course}</p>
            <p>{props.data.year}</p>
        </section>
    )
}

export default DisplayEducation