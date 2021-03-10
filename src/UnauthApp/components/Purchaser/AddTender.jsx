import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text,
        FormControl, FormLabel,
        List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import AddDeleteProdTender from './AddDeleteProdTender'
import clienteAxios from '../../../services/axios'
import { useParams } from 'react-router-dom'
import TenderContext from '../../../context/tenders/TenderContext'
import useForm from '../../../hooks/useForm'
import AddDeleteVendorTender from './AddDeleteVendorTender'

export default function AddTender() {

    const ctxTender = useContext(TenderContext)
    const { tenderProds, existVendors, productsTenForm, vendorsTenForm,
            tenderInfo, createTender, ListProducts, listProductsInv,
            tenderVendor, saveAndSendTender
        } = ctxTender

    const [form, handleInput] = useForm()
    //const toast = useToast() //chakra
    
    const submitCreteTender = (e,form) => {
        console.log(form)
        e.preventDefault()
        listProductsInv()
        existVendors()
        console.log(form)
        createTender(form)
        
    }

    const saveTender = (e) => {
        e.preventDefault()
        saveAndSendTender()
    }


    return (
            <Box as='main'>
                <Box as='form'>
                    <FormControl as='fieldset'>

                        <FormControl id="tenderTitle" mb={5}>
                            <FormLabel>Título de licitación</FormLabel>
                            <Input 
                                type='text' 
                                name='tenderTitle'
                                placeholder='Agrega un título a tu licitación'
                                onChange={handleInput}
                            />
                        </FormControl>

                        <FormControl id="generalInfo" mb={5}>
                        <FormLabel>Detalles Generales</FormLabel>
                        <Input 
                            type='text' 
                            name='generalInfo'
                            placeholder='Agrega detalles importates que los proveedores participantes deban saber'
                            onChange={handleInput}

                        />
                        </FormControl>

                        
                        <FormControl id="startDate" mb={5}>
                        <FormLabel>Fecha Inicio</FormLabel>
                        <Input 
                            type='date' 
                            name='startDate'
                            onChange={handleInput}
                        />
                        </FormControl>

                        
                        <FormControl id="endDate" mb={5}>
                        <FormLabel>Fecha Cierre</FormLabel>
                        <Input 
                            type='date' 
                            name='endDate'
                            onChange={handleInput}
                        />
                        </FormControl>

                        <Button onClick={(e => submitCreteTender(e,form))}>Crear Licitación</Button>
                </FormControl>
            </Box>

            <Box as='div' >
                {
                    productsTenForm? <AddDeleteProdTender/> : tenderProds != null? tenderProds.map((e,id )=> { return(<p key={id}>{e.productDescription}</p>)}):""
                }
                {
                    vendorsTenForm? <AddDeleteVendorTender/> : tenderVendor != null? tenderVendor.map((e,id )=> { return(<p key={id}>{e.companyName}</p>)}):""
                }
                
            </Box>
            

            {
                productsTenForm === false && vendorsTenForm === false && tenderProds != null && tenderVendor != null?
                <Box>
                    <Button onClick={(e) => saveTender(e)}>Enviar Licitación</Button>
                </Box> : ""

            }    


        </Box> 
    )
}
