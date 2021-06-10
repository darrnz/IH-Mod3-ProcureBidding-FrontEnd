import React, { useState, useContext, useEffect } from 'react'
import { Box, Input, Button, useToast, InputGroup, InputLeftElement, Heading, Image } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import AlertaContext from '../context/alerts/AlertContext'
import AuthContext from '../context/auth/AuthContext'
import logoLog from '../images/logo final 2.png' 

export default function Login(props) {

    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion } = authContext;

    const toast = useToast() 
    

    useEffect(() => {
        if(autenticado ) {
            props.history.push('/purchaser')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])

    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    })
    const { email, password } = usuario

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        
        if(email.trim() === "" || password.trim() === ""){
            return mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
        }
        iniciarSesion({email, password})

    }



    return (
        <Box as='div' mt={50} d='flex' flexDir='column' alignContent='center' justifyContent='center'  alignItems='center'>
            
            <Image src={logoLog}/>
            <Heading as='h1' >
                ¡Bienvendo!
            </Heading>
            <Box as='h6' >
                Inicia Sesión!
            </Box>
            
            <Box mt={50} p={5} as='form' w={300} pb={5} d='flex' 
                flexDirection='column' 
                justifyContent='center' alignContent='center'
                alignItems='center'>

                <InputGroup d='flex' alignItems='center'>
                    <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.6em"
                    children="@"
                    />
                    <Input 
                        size="lg" mt={2}
                        type='email'
                        name='email'
                        onChange={onChange}
                        placeholder='name@email.com'
                        value={email}
                    />
                </InputGroup>

                <Input 
                    size="lg"
                    mt={2}
                    type='password'
                    name='password'
                    onChange={onChange}
                    placeholder='*********'
                    value={password}
                />
                <Box mt={7}>
                    <Button 
                        type='submit'
                        onClick={onSubmit}
                        size="lg"  colorScheme="blue" variant="outline"
                        width="250px"
                        fontSize='lg'
                    >
                        Login
                    </Button>
                </Box>
            </Box>

            {alerta ?  
                (
                    <Box>
                    <Box className={toast({
                        description: `alerta ${alerta.categoria}`,
                        title: `${alerta.msg}`,
                        duration:2000,
                        isClosable: true,
                        })}>
                        
                    </Box>
                    </Box>
                )
                : null}
        </Box>
    )
}
