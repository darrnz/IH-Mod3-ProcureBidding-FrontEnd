
import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Text, Flex, Spacer,
    FormControl,FormLabel } from '@chakra-ui/react'
import AddDeleteProdTender from './AddDeleteProdTender'
import TenderContext from '../../../context/tenders/TenderContext'
import AddDeleteVendorTender from './AddDeleteVendorTender'
import AuthContext from '../../../context/auth/AuthContext'

export default function AddTender(props) {

    const authContext = useContext(AuthContext)
    const {  usuario} = authContext;

    const ctxTender = useContext(TenderContext)
    const { tenderProds, existVendors, productsTenForm, vendorsTenForm,
            tenderInfo, createTender, listProductsInv,
            tenderVendor, saveAndSendTender, btnSendTen
        } = ctxTender


    const [newTender, setNewTender] = useState(
        {
            loggedId: usuario._id,
            tenderTitle: '',
            startDate: '',
            endDate: '',
            generalInfo:'',
        }
    )

    useEffect(() => {


    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setNewTender({
            ...newTender,
            [e.target.name]: e.target.value
        })
        
    }
  
    const submitCreteTender = (e) => {
        
        e.preventDefault()
        listProductsInv()
        existVendors()
        
        createTender(newTender)
        setNewTender({
            loggedId: usuario._id,
            tenderTitle: '',
            startDate: '',
            endDate: '',
            generalInfo:'',
        })
        
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
                                    <Text textAlign='center'>Información general</Text>
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
                                onChange={(e) => {handleChange(e)}}
                            />
                        </FormControl>
                        <Flex  >
                            <Box d='flex' justifyContent='center' flexDirection='column'  p="4"   >   
                                <FormControl id="startDate" mb={5} w={200}>
                                <FormLabel textAlign='center'>Fecha Inicio</FormLabel>
                                <Input 
                                    type='date' 
                                    name='startDate'
                                    onChange={(e) => {handleChange(e)}}
                                />
                                </FormControl>
                                <FormControl id="endDate" mb={5}  w={200}>
                                <FormLabel textAlign='center'>Fecha Cierre</FormLabel>
                                <Input 
                                    type='date' 
                                    name='endDate'
                                    onChange={(e) => {handleChange(e)}}
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
                                onChange={(e) => {handleChange(e)}}
                            />
                            <Box as='small'>Agrega detalles como número de entregas, especificaciones técnicas, horarios, formas de pago, etc.</Box>
                            </FormControl>
                        </Flex>
                        <Button mt={3} size="lg"  colorScheme="teal" variant="outline" onClick={(e => submitCreteTender(e))}>Guardar y continuar a proveedores</Button>
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
                    <Box d='flex' h={200}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                        {  
                        tenderProds.map((e,id )=> {
                            return(
                                
                                    <Box d='flex'  width={80}   flexWrap='wrap' flexDirection='row'  m={1}
                                        border='solid' borderColor='lightslategray' borderWidth='thin'
                                    >
                                        <Box  w="100%" mr={5} d='flex' textAlign='left'>{e.productDescription}</Box>
                                        <Box fontSize='sm' w="100%" d='flex' textAlign='left'><b>Qty: </b> {e.quantity}</Box>
                                    </Box>
                                )    
                            })
                        }
                    </Box>
                    
                        :''
                }
                </FormControl>

                <FormControl bg='white'  boxShadow="lg" w={1000} as='fieldset' border='solid' borderColor='lightgray' p={5} borderRadius={6} mt={2} >
                    <Text mt={3} fontSize="xl">Seleccionar Proveedres</Text>
                    <Text mt={1} as='i' fontSize="sm">(Guarda los productos para agregar proveedores)</Text>
                {
                    vendorsTenForm? <AddDeleteVendorTender/> : tenderVendor != null?
                        <Box d='flex' h={150}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                        {
                            tenderVendor.map((e,id)  => { 
                                return(
                                    <Box d='flex'  width={80}   flexWrap='wrap' flexDirection='row' alignContent='center'  m={1}
                                        border='solid' borderColor='lightslategray' borderWidth='thin'
                                    >
                                        <Box w="100%" mr={5} d='flex' textAlign='left'>{e.companyName}</Box>
                                        <Box as='small'  w="100%" d='flex' textAlign='left'>Contacto: {e.email}</Box>
                                    </Box>
                                    )
                                })
                        }
                        </Box>
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
