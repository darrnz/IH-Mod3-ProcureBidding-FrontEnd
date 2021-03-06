import React, { useEffect, useState } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import handleAsync from '../../utils/handleAsync'
import AUTH_SERVICE from '../../services/auth'

export default function Signin() {
   


    const [value, setValue] = React.useState('Admin')
    console.log(value)

    function setrol(value) {
        setInfoSignup({...infoSignup,role:value})
    }

    const [infoSignup, setInfoSignup] = useState({
        /* role:'', */
        firstName: '',
        lastName: '',
        email: '',
        companyName:'',
        address:'',
        zipCode:'',
        rfc:'',
    })
    console.log(infoSignup)
    const handleChange= (e) =>{
        e.preventDefault()
        setInfoSignup({
            ...infoSignup,
            [e.target.name]: e.target.value
        })
        console.log(infoSignup)
        
    }
    console.log(infoSignup)

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await AUTH_SERVICE.SIGNUP(infoSignup).catch( error => console.log(error))
        if(response) {
            history.push('/')
        } else {
            alert('Signup unsuccessful')
        }
    }

    return (
        <Box as='main' d='flex' w='100vw' h='100vh' alignContent='center' justifyContent='center'>
            <Box onSubmit={ handleSubmit } as='form' d='flex' flexDirection='column' justifyContent='center' alignContent='center'>
                <RadioGroup name='role'   colorScheme="green">{/* onChange={(value) => setrol(value)} */}
                    <Stack direction='row' d='flex' alignContent='center' justifyContent='center' >
                        <Radio name='role' value='Admin' colorScheme="green" defaultChecked='true'>
                            Client
                        </Radio>
                        <Radio name='role' value='Vendor' colorScheme="red">
                            Vendor
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Input 
                    type='text'
                    name='firstName'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='Name'
                />
                <Input 
                    type='text'
                    name='lastName'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='Last name or family name'
                />
                <Input 
                    type='email'
                    name='email'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='name@email.com'
                />
                <Input 
                    type='password'
                    name='password'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='*********'
                />
                <Input 
                    type='text'
                    name='companyName'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='Commercial company name'
                />
                <Input 
                    type='text'
                    name='address'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='Address'
                />
                <Input 
                    type='text'
                    name='zipCode'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='Zip Code'
                />
                <Input 
                    type='text'
                    name='rfc'
                    onChange={ (e)=> handleChange(e) }
                    placeholder='RFC'
                />

                <Button 
                    type='submit'
                    
                >SignIn</Button>    
            </Box>
        </Box>
    )
}