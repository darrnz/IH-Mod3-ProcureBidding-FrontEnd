import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text,
        FormControl, FormLabel,
        List, ListItem, ListIcon, OrderedList, UnorderedList,Spacer, Grid,Modal,ModalBody,
        NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,GridItem,
        NumberDecrementStepper } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import { useParams } from 'react-router-dom'
import TenderContext from '../../../context/tenders/TenderContext'
import { useForm, Controller, useFieldArray  } from 'react-hook-form'


export default function AddDeleteProdTender(props) {
    const { register, handleSubmit, watch, errors, control } = useForm();   

    const ctxTender = useContext(TenderContext)
    const { tenderProds,existVendors, addProductTender, deleteProductTender,
            newTenderId, listProducts, pushProd } = ctxTender


    const [valueId, setValueId] = React.useState('')
    /* function setid(valueId) {
        setForm({...form, idProduct:valueId})
    } */
    const [quantitySet, setQuantitySet] = useState(1)
    const handleQty = (event) => {
        event.preventDefault()
        setQuantitySet(
            event.target.value
        )
    }

    useEffect(() => {
        
        
    }, [tenderProds,listProducts]) 
    
    const selectPro = (e,idc) => {
        e.preventDefault()
        let sel = listProducts.find(elem => 
            elem.idLocal === idc)
        sel = {
            ...sel,
            quantity:quantitySet
        }
        pushProd(sel)
        let pop = listProducts.findIndex(elem => 
            elem.idLocal === idc
        )

        listProducts.splice(pop,1)
        setQuantitySet(1)    
    }

    const onClickAdd = ( tenderProds,e ) => {
        e.preventDefault()
        
        addProductTender(tenderProds) 
        /* setForm({}) */ 

    }

    const onClickDelete = (e,idc) =>{
        e.preventDefault()
        deleteProductTender(idc)
    }


    return (
            <Grid templateColumns="repeat(2, 1fr)"  mx={30} d='flex' >
                
                <Box  w="100%" border='solid' borderColor='lightgrey' borderRadius={5} borderwidth={0.5} mr={2} >
                    <Box as='div'  h={50} mt={2}>
                        <Box as='b' mb={2} fontSize="lg" >Lista de productos</Box>
                    </Box>
                    <OrderedList mr={3} ml={2} >
                    {
                        listProducts.map((e,id) => {
                                    return(
                                        <ListItem key={id} d='flex' justifyContent='spaceBetween' mb={1}>
                                            <Grid templateColumns="repeat(2, 1fr)">
                                                <Input type='text' name='idc' value={id} d='none' readOnly/>
                                                {/* <Box  w="100%">{e.idLocal}</Box> */}
                                                <Box  w="100%" d='flex' textAlign='left'>{e.productDescription}</Box>
                                                <Box  w="100%" as='form' d='flex' justifyContent='space-between' >
                                                    <Input type='number' defaultValue={1} onChange={(e) =>handleQty(e)} />
                                                    <Button mx={2} value={e.idLocal} 
                                                    type='submit' size='sm' colorScheme="blue" 
                                                    variant="outline" onClick={(ev) => selectPro(ev,e.idLocal)} >Añadir </Button>
                                                </Box>
                                            </Grid>
                                        </ListItem>
                                        )
                                })
                            }
                    </OrderedList>    
                </Box>

                <Spacer/>
                <Box  w="100%" border='solid' borderColor='lightgrey' borderRadius={5} borderwidth={0.5} ml={2} d='flex' flexDirection='column'>
            
                    <Box h={50} d='flex' flexDirection='column' mt={2} mb={6} alignContent='center' >
                        <Box as='b' fontSize="lg" >Productos añadidos</Box>
                        <Box><Button size='md' colorScheme="green" variant="outline"  my={2} onClick={(e)=>{onClickAdd(tenderProds,e)}}>
                        Guardar Productos</Button></Box>
                    </Box>
                    <OrderedList>
                        {
                        
                            tenderProds.map((e,id) => {
                                return (
                                    <ListItem key={id} d='flex' justifyContent='spaceBetween' alignContent='center' mb={1}>
                                        
                                            <Box  w="100%" mr={5} d='flex' textAlign='left'>{e.productDescription}</Box>
                                            <Box  w="100%" d='flex' textAlign='left'>{e.quantity}</Box>
                                            <Box w="100%"d='flex' justifyContent='space-between' >
                                                <Button  value={e.idLocal} type='submit' 
                                                size='sm' colorScheme="orange" 
                                                variant="outline"
                                                onClick={(ev) => onClickDelete(ev,e)}>
                                            Borrar</Button></Box>
                                        
                                    </ListItem>
                                )
                            })
                        }    

                    </OrderedList>
                    
                </Box>
            </Grid> 
    )
}
