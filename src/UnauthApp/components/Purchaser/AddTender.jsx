import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text, Flex,
        List, ListItem, ListIcon, OrderedList, UnorderedList, Spacer,
    FormControl,FormLabel } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import AddDeleteProdTender from './AddDeleteProdTender'
import clienteAxios from '../../../services/axios'
import { useParams } from 'react-router-dom'
import TenderContext from '../../../context/tenders/TenderContext'
import useForm from '../../../hooks/useForm'
import AddDeleteVendorTender from './AddDeleteVendorTender'

export default function AddTender(props) {

    const ctxTender = useContext(TenderContext)
    const { tenderProds, existVendors, productsTenForm, vendorsTenForm,
            tenderInfo, createTender, ListProducts, listProductsInv,
            tenderVendor, saveAndSendTender, btnSendTen
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
        <Box as='main' d='flex' alignItems='center' flexDir='column'>
            <Box as='main' d='flex' alignItems='center' flexDir='column' >
                
                { productsTenForm ===true || vendorsTenForm === true || btnSendTen === true? 
                    <Box as='form' w={1000} d='flex' alignItems='center' alignContent='center' bg='white'  boxShadow="lg">
                    <FormControl as='fieldset' border='solid' 
                        borderColor='lightgray' p={5} borderRadius={6}  >
                        <Text my={2} fontSize="xl">Información general</Text>
                        <Text as='b' fontSize="lg">{tenderInfo.tenderTitle}</Text>
                        <Flex flexDirection='row' justifyContent='center' >
                            <Box d='flex' flexDirection='column'>
                                <Text   fontSize="lg">Fecha Incio:<b>{`${new Date(tenderInfo.startDate).getFullYear()}/${new Date(tenderInfo.startDate).getMonth() < 10 ? "0" + new Date(tenderInfo.startDate).getMonth():new Date(tenderInfo.startDate).getMonth()}` }</b></Text> 
                                <Text   fontSize="lg">Fecha Fin: <b>{`${new Date(tenderInfo.endDate).getFullYear()}/${new Date(tenderInfo.endDate).getMonth() < 10 ? "0" + new Date(tenderInfo.endDate).getMonth():new Date(tenderInfo.endDate).getMonth()}` }</b></Text>  
                            </Box>
                            <Box d='flex' ml={8} flexDirection='column'>
                                <Text textAlign='center'>Título de licitación</Text>
                                <Text  fontSize="lg">{tenderInfo.generalInfo}</Text>  
                            </Box>
                        </Flex>   
                    </FormControl>
                    </Box>
                    : 

                    <Box as='form' w={1000} d='flex' alignItems='center' alignContent='center' bg='white'  boxShadow="lg">
                    <FormControl as='fieldset' border='solid' 
                        borderColor='lightgray' p={5} borderRadius={6}  >

                        <Text my={2} fontSize="xl">Información general</Text>
                        <FormControl id="tenderTitle" mb={5}  >
                            <FormLabel textAlign='center'>Título de licitación</FormLabel>
                            
                            <Input 
                                type='text' 
                                name='tenderTitle'
                                placeholder='Escribe el título con el que tu y los proveedores identificarán esta licitación'
                                onChange={handleInput}
                            />
                        </FormControl>
                        <Flex  >
                            <Box d='flex' justifyContent='center' flexDirection='column'  p="4"   >   
                                <FormControl id="startDate" mb={5} w={200}>
                                <FormLabel textAlign='center'>Fecha Inicio</FormLabel>
                                <Input 
                                    type='date' 
                                    name='startDate'
                                    onChange={handleInput}
                                />
                                </FormControl>

                                
                                <FormControl id="endDate" mb={5}  w={200}>
                                <FormLabel textAlign='center'>Fecha Cierre</FormLabel>
                                <Input 
                                    type='date' 
                                    name='endDate'
                                    onChange={handleInput}
                                />
                                </FormControl>
                            </Box>
                            <Spacer/>
                            <FormControl id="generalInfo" mb={5} p="4">
                            <FormLabel textAlign='center'>Detalles Generales</FormLabel>
                            <Input 
                                size='lg'
                                type='text' 
                                name='generalInfo'
                                placeholder='Agrega detalles importates que los proveedores participantes deban saber'
                                onChange={handleInput}

                            />
                            <Box as='small'>Agrega detalles como número de entregas, especificaciones técnicas, horarios, formas de pago, etc.</Box>
                            </FormControl>
                        </Flex>
                        <Button mt={3} size="lg"  colorScheme="teal" variant="outline" onClick={(e => submitCreteTender(e,form))}>Guardar y continuar a proveedores</Button>
                </FormControl>
                </Box>
             
                }
            </Box>

            <Box as='div' >
                <FormControl bg='white'  boxShadow="lg" w={1000} as='fieldset' border='solid' borderColor='lightgray' p={5} borderRadius={6} mt={2} >
                    <Text my={2} fontSize="xl">Seleccionar Productos</Text>
                    <Text mt={1}  as='i' fontSize="sm">(Guarda la información general para agregar productos)</Text>
                    
                {
                    productsTenForm? <AddDeleteProdTender/> : tenderProds !== null? 
                        tenderProds.map((e,id )=> {
                            return(
                                    <Box d='flex' flexWrap='wrap' flexDirection='row' justifyContent='space-evenly' m={1}
                                        border='solid' borderColor='lightslategray' borderWidth='thin'
                                    >
                                        <Box  w="100%" mr={5} d='flex' textAlign='left'>{e.productDescription}</Box>
                                        <Box fontSize='sm' w="100%" d='flex' textAlign='left'><b>Qty: </b> {e.quantity}</Box>
                                    </Box>
                                )    
                            })
                        :''
                }
                </FormControl>

                <FormControl bg='white'  boxShadow="lg" w={1000} as='fieldset' border='solid' borderColor='lightgray' p={5} borderRadius={6} mt={2} >
                    <Text mt={3} fontSize="xl">Seleccionar Proveedres</Text>
                    <Text mt={1} as='i' fontSize="sm">(Guarda los productos para agregar proveedores)</Text>
                {
                    vendorsTenForm? <AddDeleteVendorTender/> : tenderVendor != null?
                    
                        tenderVendor.map((e,id)  => { 
                            return(
                                <Box d='flex' flexWrap='wrap' flexDirection='row' justifyContent='space-evenly' m={1}
                                    border='solid' borderColor='lightslategray' borderWidth='thin'
                                >
                                    <Box w="100%" mr={5} d='flex' textAlign='left'>{e.companyName}</Box>
                                    <Box as='small'  w="100%" d='flex' textAlign='left'>Contacto: {e.email}</Box>
                                </Box>
                                )
                            })
                   
                        
                        :''
                }
                </FormControl>
            </Box>
            

            {
                //productsTenForm === false && vendorsTenForm === false && tenderProds != null && tenderVendor != null?
                btnSendTen?  
                <Box mt={5}>
                    <Button size="lg"  colorScheme="green" variant="outline" 
                    onClick={(e) => saveTender(e)}>Enviar Licitación</Button>
                </Box> : ""

            }    


        </Box> 
    )
}
