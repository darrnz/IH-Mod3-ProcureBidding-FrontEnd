import React, { useState, useEffect, useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text,
        FormControl, FormLabel,
        List, ListItem, ListIcon, OrderedList, UnorderedList,
        NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
        NumberDecrementStepper } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import clienteAxios from '../../../services/axios'
import { useParams } from 'react-router-dom'
import TenderContext from '../../../context/tenders/TenderContext'
import { useForm, Controller, useFieldArray  } from 'react-hook-form'


export default function AddDeleteProdTender() {
    const { register, handleSubmit, watch, errors, control } = useForm();   

    const ctxTender = useContext(TenderContext)
    const { tenderProds, addProductTender,
            newTenderId, listProducts, pushProd } = ctxTender

    
    
    /* function setQty(value) {
        setForm({...form, quantity:value})
        //console.log(form)
    } */

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

console.log(listProducts)
    useEffect(() => {
        
        
    }, [tenderProds,listProducts]) 
    
    const selectPro = (e,idc) => {
        e.preventDefault()
        let sel = listProducts.find(elem => 
            elem.idLocal === idc
        )
        sel = {
            ...sel,
            quantity:quantitySet
        }
        pushProd(sel)

        let pop = listProducts.findIndex(elem => 
            elem.idLocal === idc
        )
        console.log(pop)
        listProducts.splice(pop,1)
    
    }

    const onClickAdd = ( tenderProds,e ) => {
        e.preventDefault()
        addProductTender(tenderProds) 
        /* setForm({}) */ 
        
        console.log(tenderProds)
        console.log(e)
    }

    const onClickDelete = (e,idc) =>{
        e.preventDefault()
        let seldel = listProducts.find(elem => 
            elem.idLocal === idc
        )
    }
    console.log(tenderProds)

    return (
            <Box as='div' mx={30} d='flex' flexDirection='row' justifyContent='space-between'>
                <Box>
                    <Box as='h3'>Lista de productos</Box>
                    <OrderedList >
                    {
                        listProducts.map((e,id) => {
                                    return(
                                        <ListItem key={id} d='flex' justifyContent='spaceBetween'>
                                            <Text>{id}</Text>
                                            <Text>{e.productDescription}</Text>
                                            <Box as='form'>
                                            <Input type='text' name='idc'value={id} readOnly/>
                                            <input type='number' defaultValue={1} onChange={(e) =>handleQty(e)} />
                                            <Button ml={30} value={e.idLocal} type='submit'onClick={(ev) => selectPro(ev,e.idLocal)} >Añadir </Button>
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
                        
                            tenderProds.map((e,id) => {
                                return (
                                    <ListItem key={id}>
                                        <Text>{e.productDescription}</Text>
                                        <Button  value={e.idLocal} type='submit'onClick={(ev) => onClickDelete(ev,e.idLocal)}>Borrar</Button>
                                    </ListItem>
                                )
                            })
                        }    

                    </OrderedList>
                    <Button onClick={(e)=>{onClickAdd(tenderProds,e)}}>Delete</Button>
                </Box>
            </Box> 
    )
}
