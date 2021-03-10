import React, { useEffect, useState, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Link, useHistory, Redirect } from 'react-router-dom'

import AlertaContext from '../../context/alerts/AlertContext.js'
import AuthContext from '../../context/auth/AuthContext'


export default function Signin(props) {
    
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    
    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario } = authContext;

    const history = useHistory()

    const [value, setValue] = React.useState('Admin')
    console.log(value)
    function setrol(value) {
        guardarUsuario({...usuario,role:value})
    }   

    const [usuario, guardarUsuario] = useState({
        role:value,
        firstName: '',
        lastName: '',
        email: '',
        password: "",
        companyName:'',
        address:'',
        zipCode:'',
        rfc:'',
        confirmar:''
    })

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }

    useEffect(() => {
        if(autenticado){
            history.push('/vendor')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, history])
    
    const { role, zipCode, firstName,rfc, lastName, address, email, companyName, password, confirmar } = usuario

    const onSubmit = e => {
        e.preventDefault()
        if (
            
            email.trim() === "" ||
            password.trim() === "" || 
            confirmar.trim() === "" 
        ){
            mostrarAlerta("Todos los campos son obligatorios", 'alerta-error')
            return
        }
        if(password.length < 6) {
            mostrarAlerta("El password debe ser de al menos 6 caracteres", "alerta-error")
            return
        }
        if(password !== confirmar){
            mostrarAlerta('Los passwords no coinciden')
            return
        }
        registrarUsuario({
        role,
        firstName,
        lastName,
        email,
        password,
        companyName,
        address,
        zipCode,
        rfc
        
        })
    }

    return (
        <>
        
        <Box as='main' d='flex' w='100vw' h='100vh' alignContent='center' justifyContent='center'>
        {alerta ?  
                (
                    <div className={`alerta ${alerta.categoria}`}>
                        {alerta.msg}
                    </div>
                )
            : null}
            <Box onSubmit={ onSubmit } as='form' d='flex' flexDirection='column' justifyContent='center' alignContent='center'>
                
                <RadioGroup name='role'   colorScheme="green" onChange={(value) => setrol(value) }>
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
                    onChange={ onChange }
                    placeholder='Name'
                    value={firstName}
                />
                <Input 
                    type='text'
                    name='lastName'
                    onChange={ onChange }
                    placeholder='Last name or family name'
                    value={lastName}
                />
                <Input 
                    type='email'
                    name='email'
                    onChange={ onChange }
                    placeholder='name@email.com'
                    value={email}
                />
                <Input 
                    type='password'
                    name='password'
                    onChange={ onChange }
                    placeholder='*********'
                    value={password}
                />

                <Input 
                    type='password'
                    name="confirmar"
                    id="confirmar"
                    onChange={ onChange }
                    placeholder="Repite tu Password"
                    value={confirmar}
                />

                <Input 
                    type='text'
                    name='companyName'
                    onChange={ onChange }
                    placeholder='Commercial company name'
                    value={companyName}
                />
                <Input 
                    type='text'
                    name='address'
                    onChange={ onChange }
                    placeholder='Address'
                    value={address}
                />
                <Input 
                    type='text'
                    name='zipCode'
                    onChange={onChange}
                    placeholder='Zip Code'
                    value={zipCode}
                />
                <Input 
                    type='text'
                    name='rfc'
                    onChange={ onChange }
                    placeholder='RFC'
                    value={rfc}
                />

                <Button 
                    type='submit'
                    
                >Registrarme</Button>    
            </Box>
        </Box>
    </>
    )
}