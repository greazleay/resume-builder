import { NextPage } from "next";

export default function BioData (props: Props) {
    return (
        <section>
            <h3>General Information</h3>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={props.firstName}
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={props.lastName}
                onChange={props.handleChange}
            />
            <input
                type="email"
                name="emailAddress"
                placeholder="Email"
                value={props.emailAddress}
                onChange={props.handleChange}
            />
            <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={props.phoneNumber}
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={props.address}
                onChange={props.handleChange}
            />
        </section>
    );
}

interface Props {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}