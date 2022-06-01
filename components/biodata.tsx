import { useForm } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

interface PageProps {
    handleChange: (event: any) => void;
}

export default function BioData({ handleChange }: PageProps) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={errors.firstName}>
                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                    <Input id='firstName' placeholder='First Name' {...register('firstName', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.lastName}>
                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                    <Input id='lastName' placeholder='Last Name' {...register('lastName', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.role}>
                    <FormLabel htmlFor='role'>Role</FormLabel>
                    <Input id='role' placeholder='Role' {...register('role', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.role && errors.role.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.emailAddress}>
                    <FormLabel htmlFor='emailAddress'>Email Address</FormLabel>
                    <Input id='emailAddress' placeholder='Email Address' type='email' {...register('emailAddress', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.emailAddress && errors.emailAddress.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phoneNumber}>
                    <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                    <Input id='phoneNumber' placeholder='Phone Number' type='tel' {...register('phoneNumber', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.phoneNumber && errors.phoneNumber.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.address}>
                    <FormLabel htmlFor='address'>Address</FormLabel>
                    <Input id='address' placeholder='Address' {...register('address', { required: 'This is required', minLength: 1, onChange: handleChange })} />
                    <FormErrorMessage>
                        {errors.address && errors.address.message}
                    </FormErrorMessage>
                </FormControl>

                {/* <Button colorScheme='teal' mt={4} type="submit">Submit</Button> */}
            </form>
        </div>
    );
}

interface Props {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}