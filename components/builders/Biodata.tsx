import { useForm } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useResume } from '../../context/app.context';

export const Biodata = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const { handleBiodataChange } = useResume();

    return (
        <Stack as='form' onSubmit={handleSubmit(onSubmit)}>

            <FormControl isInvalid={errors.firstName}>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input id='firstName' placeholder='First Name' {...register('firstName', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.lastName}>
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <Input id='lastName' placeholder='Last Name' {...register('lastName', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.role}>
                <FormLabel htmlFor='role'>Role</FormLabel>
                <Input id='role' placeholder='Role' {...register('role', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.role && errors.role.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.emailAddress}>
                <FormLabel htmlFor='emailAddress'>Email Address</FormLabel>
                <Input id='emailAddress' placeholder='Email Address' type='email' {...register('emailAddress', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.emailAddress && errors.emailAddress.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.phoneNumber}>
                <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                <Input id='phoneNumber' placeholder='Phone Number' type='tel' {...register('phoneNumber', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.phoneNumber && errors.phoneNumber.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.address}>
                <FormLabel htmlFor='address'>Address</FormLabel>
                <Input id='address' placeholder='Address' {...register('address', { required: 'This is required', minLength: 1, onChange: handleBiodataChange })} />
                <FormErrorMessage>
                    {errors.address && errors.address.message}
                </FormErrorMessage>
            </FormControl>

        </Stack>
    );
}