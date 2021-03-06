import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Text, Grid, ListItem, OrderedList, Spacer } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import TenderContext from '../../context/tenders/TenderContext'

export default function AddDeleteVendorTender(props) { 


    const ctxTender = useContext(TenderContext)
    const { newTenderId, listvendors, saveVendorsOnTender,
            deleteVendorTender, addVendorTender, tenderVendor, } = ctxTender
        
    const [idVendorSet, setIdVendorSet] = useState({})

    useEffect(() => {
        
    }, [tenderVendor,listvendors])

    
    const selectVend = (e, idVendorC) => {
        e.preventDefault()
        addVendorTender(idVendorC)
    }
    const deleteVend = (e, idVendor) => {
        e.preventDefault()
        deleteVendorTender(idVendor)
    }

    const saveVendors = (e) => {
        e.preventDefault()
        saveVendorsOnTender()
    }


    return (
        <>
        
        
        {   
            !listvendors ? <Text>CARGANDO...</Text> : 
            (
            <Grid templateColumns="repeat(2, 1fr)"  mx={30} d='flex' >    
                <Box w="100%" border='solid' borderColor='lightgrey' borderRadius={5} borderwidth={0.5} mr={2}>
                    <Box as='div' h={50}>
                        <Box  as='b' mb={2} fontSize="lg">Preveedores Disponibles</Box>
                    </Box>
                    <OrderedList mr={3} ml={2}>
                    {
                        listvendors.map((e,id) => {
                                    return(
                                        <ListItem key={e._id} d='flex' justifyContent='spaceBetween' mb={1}>
                                            
                                            <Box w="100%" mr={5} d='flex' textAlign='left'>{e.companyName}</Box>
                                            <Box as='small'  w="100%" d='flex' textAlign='left'>Contacto: {e.email}</Box>
                                            <Box w="100%"d='flex' justifyContent='space-between'>
                                                <Button ml={30} value={e._id} type='submit'
                                                size='sm' colorScheme="blue" 
                                                variant="outline" onClick={(ev) => selectVend(ev,e._id)}> A??adir Proveedor </Button>
                                            </Box>
                                            
                                        </ListItem>
                                        )
                                })
                            }
                    </OrderedList>    
                </Box>
                <Spacer />
                <Box  w="100%" border='solid' borderColor='lightgrey' borderRadius={5} borderwidth={0.5} ml={2} d='flex' flexDirection='column'>
                    <Box mt={2} h={50} d='flex' flexDirection='column' mb={6} alignContent='center' >       
                        <Box as='b' fontSize="lg" >Proveedores a??adidos</Box>
                        <Box as='small'>Selecciona al menos 2 proveedores</Box>
                        <Box>
                            {tenderVendor.length > 1 ? <Button size='md' colorScheme="green" variant="outline"  
                            my={2} onClick={(e)=>{saveVendors(e)}}>Guardar Proveedores</Button> : ''}
                            
                        </Box>    
                    </Box>
                    <OrderedList mt={5}  mr={3} ml={2}>
                        {
                            tenderVendor.map((e,id) => {
                                return (
                                    <ListItem key={e._id} d='flex' justifyContent='spaceBetween' mb={1}>
                                        <Box w="100%" mr={5} d='flex' textAlign='left'>{e.companyName}</Box>
                                        <Box as='small'  w="100%" d='flex' textAlign='left'>Contacto: {e.email}</Box> 
                                        <Box w="100%" d='flex' justifyContent='space-between'>
                                            <Button  value={e._id} type='submit' 
                                            size='sm' colorScheme="orange" 
                                            variant="outline"
                                            onClick={(ev) => deleteVend(ev,e._id)}>
                                            Borrar</Button>
                                        </Box>
                                    </ListItem>
                                )
                            })
                        }    

                    </OrderedList>
                </Box>
            
 
            </Grid>
            )
        }
        
    </>    
    )
}
