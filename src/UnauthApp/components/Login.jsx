import React, { useState, useContext, useEffect } from 'react'
import { Box, Input, Button, Heading, useToast} from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
/* import AlertaContext from '../../context/alerts/AlertContext' */
import AuthContext from '../../context/auth/AuthContext'

export default function Login(props) {

    /* const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext */

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion } = authContext;

    const toast = useToast() //chakra
    const history = useHistory()

    useEffect(() => {
        if(autenticado){
            props.history.push('/vendor')
        }

      /*   if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
 */
    }, [mensaje, autenticado, history])

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
        
       /*  if(email.trim() === "" || password.trim() === ""){
            return mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
        } */
        iniciarSesion({email, password})

    }



    return (
        <Box as='main' d='flex' w='100vw' h='100vh' alignContent='center' justifyContent='center' >
            <Heading as='h1'>
                Welcomeback! Please enter your data to login.
            </Heading>
           {/*  {alerta ?  
                (
                    <div className={`alerta ${alerta.categoria}`}>
                        {alerta.msg}
                    </div>
                )
            : null} */}
            <Box as='form' d='flex' flexDirection='column' justifyContent='center' alignContent='center'>
                <Input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    placeholder='name@email.com'
                    value={email}
                />
                <Input 
                    type='password'
                    name='password'
                    onChange={onChange}
                    placeholder='*********'
                    value={password}
                />
                <Button 
                    type='submit'
                    onClick={onSubmit}
                    colorScheme="blue"  size="md"
                    >
                    Login
                </Button>
            </Box>
        </Box>
    )
}
