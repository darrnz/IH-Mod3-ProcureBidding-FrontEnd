import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text,
        FormControl, FormLabel,
        List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import TenderContext from '../../../context/tenders/TenderContext'
import { useForm, Controller, useFieldArray  } from 'react-hook-form'



export default function AddDeleteVendorTender() { 


    const ctxTender = useContext(TenderContext)
    const { newTenderId, listvendors, saveVendorsOnTender,
            deleteVendorTender, addVendorTender, tenderVendor, } = ctxTender
        console.log(listvendors)

    const [idVendorSet, setIdVendorSet] = useState({})
    useEffect(() => {
        
        /* const getVendors = async() => {
            let resSer = await clientAxios('/list-vendors')
            
        } */

    }, [tenderVendor,listvendors])

    const selectVend = (e, idVendorC) => {
        e.preventDefault()
/*         setIdVendorSet({idVendor: idVendorC})
            console.log(idVendorSet) */
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
        {console.log(listvendors)}
        {   
            !listvendors ? (<Text>CARGANDO...</Text>) : 
            (
                <Box as='div' mx={30} d='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
            <Box as='h3'>Preveedores Disponibles</Box>
            <OrderedList >
            {
                listvendors.map((e,id) => {
                            return(
                                <ListItem key={e._id} d='flex' justifyContent='spaceBetween'>
                                    <Text>{e.companyName}</Text>
                                    <Text as='small'>Contacto: {e.email}</Text>
                                    <Box as='form'>
                                    <Button ml={30} value={e._id} type='submit' onClick={(ev) => selectVend(ev,e._id)}> Añadir Proveedor </Button>
                                    </Box>
                                </ListItem>
                                )
                        })
                    }
            </OrderedList>    
        </Box>
        <Box>
    
            <Box as='h3'>Productos añadidos</Box>
            <OrderedList>
                {
                    tenderVendor.map((e,id) => {
                        return (
                            <ListItem key={e._id}>
                                <Text>{e.companyName}</Text>    
                                <Button  value={e._id} type='submit' onClick={(ev) => deleteVend(ev,e._id)}>Borrar</Button>
                            </ListItem>
                        )
                    })
                }    

            </OrderedList>
        </Box>
        <Button onClick={(e)=>{saveVendors(e)}}>Guardar Proveedores</Button>
    </Box> 
            )
        }

    </>    
    )
}
