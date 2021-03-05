import React, { useEffect, useState } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import AUTH_SERVICE from '../../services/auth'

export default function Signin() {
    const [form, handleInput] = useForm()
    
    const [radioValue, setRadioValue] = useState({})
console.log(form)
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await AUTH_SERVICE.SIGNUP(form).catch( err => console.log(err))
        if(response) {
            history.push('/')
        } else {
            alert('Signup unsuccessful')
        }
    }

    return (
        <Box as='main' d='flex' w='100vw' h='100vh' alignContent='center' justifyContent='center'>
            <Box as='form' d='flex' flexDirection='column' justifyContent='center' alignContent='center'>
                <RadioGroup name='role' onChange={setRadioValue}  colorScheme="green">
                    <Stack direction='row' d='flex' alignContent='center' justifyContent='center' >
                        <Radio value='Admin' colorScheme="green" defaultChecked='true'>
                            Client
                        </Radio>
                        <Radio value='Vendor' colorScheme="red">
                            Vendor
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Input type='text' d='' name='role' value={radioValue} onChange={handleInput} />
                <Input 
                    type='text'
                    name='firstName'
                    onChange={ handleInput }
                    placeholder='Name'
                />
                <Input 
                    type='text'
                    name='lastName'
                    onChange={ handleInput }
                    placeholder='Last name or family name'
                />
                <Input 
                    type='email'
                    name='email'
                    onChange={ handleInput }
                    placeholder='name@email.com'
                />
                <Input 
                    type='password'
                    name='password'
                    onChange={ handleInput }
                    placeholder='*********'
                />
                <Input 
                    type='text'
                    name='companyName'
                    onChange={ handleInput }
                    placeholder='Commercial company name'
                />
                <Input 
                    type='text'
                    name='address'
                    onChange={ handleInput }
                    placeholder='Address'
                />
                <Input 
                    type='text'
                    name='zipCode'
                    onChange={ handleInput }
                    placeholder='Zip Code'
                />
                <Input 
                    type='text'
                    name='rfc'
                    onChange={ handleInput }
                    placeholder='RFC'
                />

                <Button 
                    type='submit'
                    onClick={ handleSubmit }
                >SignIn</Button>    
            </Box>
        </Box>
    )
}