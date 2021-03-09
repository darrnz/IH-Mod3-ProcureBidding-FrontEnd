import React, { useEFfect } from 'react'
import { Box, Input, Button, Heading, useToast} from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import AUTH_SERVICE from '../../services/auth'
import handleAsync from '../../utils/handleAsync'
import { useAuth } from '../../context/AuthContext'

export default function Login() {

    const [form, handleInput] = useForm()
    const toast = useToast() //chakra
    const history = useHistory()
    const[,dispatch] = useAuth()

    const handleSubmit = async e =>{
        e.preventDefault()
        const {user} = await handleAsync(()=>AUTH_SERVICE.LOGIN(form))
            if(user){
            dispatch({type: 'LOGIN', payload: {user}})
            } 
            else {
                toast({
                    position: 'top',
                    title: 'Error',
                    description: 'Please check your email or password',
                    status: 'error',
                    duration: 2000,
                    isClosable: true 
                })
            }
    }

    return (
        <Box as='main' d='flex' w='100vw' h='100vh' alignContent='center' justifyContent='center' >
            <Heading as='h1'>
                Welcomeback! Please enter your data to login.
            </Heading>
            <Box as='form' d='flex' flexDirection='column' justifyContent='center' alignContent='center'>
                <Input 
                    type='email'
                    name='email'
                    onChange={handleInput}
                    placeholder='name@email.com'
                />
                <Input 
                    type='password'
                    name='password'
                    onChange={handleInput}
                    placeholder='*********'
                />
                <Button 
                    type='submit'
                    onClick={handleSubmit}
                    colorScheme="blue"  size="md"
                    >
                    Login
                </Button>
            </Box>
        </Box>
    )
}
