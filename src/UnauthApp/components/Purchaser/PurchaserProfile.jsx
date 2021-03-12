import React, { useContext, useEffect } from 'react'
import { Box, Input, Button, Text } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import ListTenders from './ListTenders'
import AddTender from './AddTender'
import TenderContext from '../../../context/tenders/TenderContext'
import AuthContext from '../../../context/auth/AuthContext'
import Loader from '../../layout/Loader'
import { useHistory } from 'react-router-dom'

export default function PurchaserProfile(props) {

    const ctxTender = useContext(TenderContext)
    const { newTender, closeAndClearTender, tenderForm, 
        tenders, listUserTenders
    }  = ctxTender

    const history = useHistory()
    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado } = authContext;

 
    useEffect(() => {
 
        
    }, [])

    const createTender = (e) => {
        e.preventDefault()
        newTender()
    }

    const closeNewTender = (e) => {
        e.preventDefault()
        closeAndClearTender()
    }

    if(usuario == null) {
        return(<Loader />)
    }
    if(usuario.role==='Vendor') {
        history.push('/vendor')
    }
 
    return (
        <>
            <Box>             
                <Box my={10}>
                    <Box>
                        <Text mt={10} fontSize="3xl">Crea una nueva licitación</Text>
                        <Box as='small'>Clickea en el botón  y escribe la inforación solicitado en los campos para generar una nueva licitación</Box>   
                    </Box>
                    {
                        tenderForm? <Button size="lg"  colorScheme="red" 
                                        variant="outline" mt={3} mb={3} 
                                        onClick={(e) => closeNewTender(e)}>
                                        Cerrar y borrar
                                    </Button>  
                                :   <Button mt={3} mb={3} size="lg" 
                                        colorScheme="blue" variant="outline"  
                                        onClick={(e) => createTender(e)}>
                                        Empezar nueva licitación
                                    </Button>
                    }
                    
                    {
                        tenderForm?<AddTender/> : ''
                    }
                    
                </Box>
                <Box mb={10}>
                    <ListTenders user={usuario}/>
                </Box>

            </Box>
        </>
    )
}
