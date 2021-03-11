import React, { useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import ListTenders from './ListTenders'
import AddTender from './AddTender'
import TenderDetails from './TenderDetails'
import TenderContext from '../../../context/tenders/TenderContext'


export default function PurchaserProfile() {

    const ctxTender = useContext(TenderContext)
    const { newTender, closeAndClearTender, tenderForm  }  = ctxTender

    const createTender = (e) => {
        e.preventDefault()
        newTender()
    }

    const closeNewTender = (e) => {
        e.preventDefault()
        closeAndClearTender()
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
                        tenderForm?<AddTender/>:''
                    }
                    
                </Box>
                <Box>
                    <ListTenders/>
                </Box>
                <Box>
                    <TenderDetails />
                </Box>
            </Box>
        </>
    )
}
