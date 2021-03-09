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
import { useForm, Controller } from 'react-hook-form'


export default function AddDeleteProdTender() {
    const { register, handleSubmit, watch, errors, control } = useForm();   
    const ctxTender = useContext(TenderContext)
    const { tenderProds, addProductTender, newTenderId } = ctxTender
   
    
    
    /* function setQty(value) {
        setForm({...form, quantity:value})
        //console.log(form)
    } */

    const [valueId, setValueId] = React.useState('')
    /* function setid(valueId) {
        setForm({...form, idProduct:valueId})
    } */
    const [productsList, setProductsList] = useState([])
    /* const [form, setForm] = useState({
        
    }) */


    useEffect(() => {
        const listProducts = async() => {
            let resSer = await clienteAxios.get('/list-products')
            setProductsList(resSer.data)
            console.log(productsList)
        }
        listProducts()
    }, [])

    const onClickAdd = ( data,e ) => {
        e.preventDefault()
        addProductTender(data)
        /* setForm({}) */ 
        
        console.log(data)
        console.log(e)
    }
    console.log(tenderProds)

    return (
            <Box as='div' mx={30} d='flex' flexDirection='row' justifyContent='space-between'>
                <Box>
                    <Box as='h3'>Lista de productos</Box>
                    <OrderedList >
                    {
                                productsList.map((e,id) => {
                                    return(
                                        <ListItem key={e._id} d='flex' justifyContent='spaceBetween'>
                                            <Text>{e.idLocal}</Text>
                                            <Text>{e.productDescription}</Text>
                                            <Box as='form' d='flex' onSubmit={ handleSubmit(onClickAdd)}>
                                                <FormControl id='quantity'  pr={10} pl={10} width={40}>
                                                    <Controller as={      
                                                      <NumberInput min={1}  ref={register()} > {/* nChange={(data) => setQty(data)} */}
                                                        <NumberInputField  />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>  
                                                    }
                                                    name='quantity'
                                                    control={control}
                                                    />
                                                </FormControl>  
                                                {/* <input type="number" placeholder="quantity" name="quantity1" ref={register} /> */}
                                                <input type='text' defaultValue={e._id} name='idProduct' ref={register}  />
                                                {/* <Input type='text' value={e._id} name='idProduct' onChange={valueId => {setid(valueId)}}/> */}
                                                <Button type='submit' >Añadir producto</Button>
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
                                        <Text>{e.name}</Text>
                                        <Button>Delete</Button>
                                    </ListItem>
                                )
                            })
                        }    

                    </OrderedList>
                </Box>
            </Box> 
    )
}
