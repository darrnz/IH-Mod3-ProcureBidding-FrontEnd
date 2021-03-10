import React, { useEffect, useState } from 'react'
import { Box, Input, Button, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, 
    NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,
    Select} from '@chakra-ui/react'
import clienteAxios from '../../../services/axios'

import { useForm, Controller, useFieldArray  } from 'react-hook-form'
export default function AddProduct() {


    const { register, handleSubmit, watch, errors, control, reset} = useForm(); 
    const [newProduct, setNewProduct] = useState(
        {
            idLocal: '',
            productDescription: '',
            boxSize: 0,
            uom:'',
            productFamily: '',
        }
    )
/*     useEffect(() => {
        const listProducts = async() => {
            let resSer = await clienteAxios.post('/create-product')
            setProductsList(resSer.data)
            console.log(productsList)
        }
        listProducts()
    }, []) */

/*     const handleChange = (e) => {
        //e.preventDefault()
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
        console.log(newProduct)
    } */
    let listCreated = []
    console.log(listCreated)
    const onClickAdd = async ( data,e ) => {
        e.preventDefault()
        console.log(data)
        console.log(e)
   
        let createdProd = await clienteAxios.post('/create-product', data)
        console.log(createdProd.data)
        listCreated.push(createdProd.data)
        console.log(listCreated)
        reset({})

    }


    return (
        <>
        <Box as='main'>
            <Text >Detalles de nuevo producto</Text>
            <Box as='form' onSubmit={handleSubmit(onClickAdd)}>
                <FormControl as='fieldset' >

                    <FormControl id="idLocal" mb={5}>
                        <FormLabel>ID</FormLabel>
                        <Input 
                            type='text' 
                            name='idLocal'
                            placeholder='Código de tu inventario'
                            ref={register()}
                        />
                    </FormControl>

                    <FormControl id="description" mb={5}>
                        <FormLabel>Description</FormLabel>
                        <Input 
                            type='text'
                            name='productDescription'
                            placeholder='Descripción: tipo, medidas, color, material, etc.' 
                            ref={register()}
                        />
                        <FormHelperText>Haz una descripción detallada</FormHelperText>
                    </FormControl>

                    <FormControl id="uom" mb={5}>
                        <FormLabel>UDM</FormLabel>
                        <Input 
                            type='text'
                            name='uom'
                            placeholder='Unidad de medida' 
                            ref={register()} 
                        />
                    </FormControl>

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

                    <FormControl id="productFamily">
                        <FormLabel>Familia del producto</FormLabel>
                        <Select colorScheme='yellow' ref={register()} placeholder="Selecciona el grupo de tu producto" name='productFamily'>
                            <option value='Alimentos y Bebidas'>Alimentos y Bebidas</option>
                            <option value='Equipo Computo'>Equipo Computo</option>
                            <option value='Equipo Construcción'>Equipo Construcción</option>
                            <option value='Suministros Oficina'>Suministros Oficina</option>
                        </Select>
                    </FormControl>

                    <Button type='submit'>Guardar nuevo producto</Button>
                </FormControl>
            </Box>
            <p>{
                listCreated.map((e,id) => {
                    return(
                        <p key={id}>{e.productDescription}</p>
                    )
                })
            }</p>
        </Box>
        </>
    )
}
