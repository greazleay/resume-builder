import React from "react";

function DisplayBio(props) {
    return (
        <section>
            <h3>Personal Details</h3>
            <h4>{props.data.firstName} {props.data.lastName}</h4>
            <p>{props.data.emailAddress}</p>
            <p>{props.data.phoneNumber}</p>
            <p>{props.data.address}</p>
        </section>
    )
}

export default DisplayBio