import React, { useEffect, useState, useContext } from 'react'
import { Box, Input, Button, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, 
    NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,
    Select} from '@chakra-ui/react'
import clienteAxios from '../../../services/axios'
import AuthContext from '../../../context/auth/AuthContext'
import { useForm, Controller, useFieldArray  } from 'react-hook-form'
import TenderContext from '../../../context/tenders/TenderContext'


export default function AddProduct(props) {
    const authContext = useContext(AuthContext)
    const {  usuario, usuarioAutenticado } = authContext;

    const ctxTender = useContext(TenderContext)
    const { listProductsInv, listProducts, addProdToList } = ctxTender

    console.log(usuario) 
    
    
    const [value, setValua] = React.useState('Equipo Computo')
    function setFam(value) {
        setNewProduct({...usuario, productFamily: value})
    }  
    const [newProduct, setNewProduct] = useState(
        {
            idCreator: usuario._id,
            idLocal: '',
            productDescription: '',
            boxSize: 0,
            uom:'',
            productFamily: '',
        }
    )

    useEffect(() => {

        usuarioAutenticado()
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
        console.log(newProduct)
    }

    const onClickAdd = async ( e ) => {
        e.preventDefault()
        /* setNewProduct({...newProduct,idCreator: usuario._id}) */
        console.log(newProduct)
        let createdProd = await clienteAxios.post('/create-product', newProduct)
        console.log(createdProd.data)
        addProdToList(createdProd.data)
        setNewProduct({
            idCreator: usuario._id,
            idLocal: '',
            productDescription: '',
            boxSize: 0,
            uom:'',
            productFamily: '',
        })
    }


    return (
        <>
        <Box as='main'>
            <Text >Detalles de nuevo producto</Text>
            <Box as='form' onSubmit={(e) => onClickAdd(e)}>
                <FormControl as='fieldset' >

                    <FormControl id="idLocal" mb={5}>
                        <FormLabel>ID</FormLabel>
                        <Input 
                            type='text' 
                            name='idLocal'
                            placeholder='Código de tu inventario'
                            onChange={(e) => {handleChange(e)}}
                        />
                    </FormControl>

                    <FormControl id="description" mb={5}>
                        <FormLabel>Description</FormLabel>
                        <Input 
                            type='text'
                            name='productDescription'
                            placeholder='Descripción: tipo, medidas, color, material, etc.' 
                            onChange={(e) => {handleChange(e)}}
                        />
                        <FormHelperText>Haz una descripción detallada</FormHelperText>
                    </FormControl>

                    <FormControl id="uom" mb={5}>
                        <FormLabel>UDM</FormLabel>
                        <Input 
                            type='text'
                            name='uom'
                            placeholder='Unidad de medida ej. kg, lt, paq.' 
                            onChange={(e) => {handleChange(e)}}
                        /> 
                    </FormControl>

                    <FormControl id="boxSize" mb={5}>
                        <FormLabel>Piezas por Unidad</FormLabel>
                        <Input 
                            type='number'
                            name='boxSize'
                            placeholder='Piezas por Unidad (agrega un número)' 
                            onChange={(e) => {handleChange(e)}}
                        /> 
                    </FormControl>


                    <FormControl id="productFamily">
                        <FormLabel>Familia del producto</FormLabel>
                        <Select colorScheme='yellow' onChange={(e) => {handleChange(e)}} placeholder="Selecciona el grupo de tu producto" name='productFamily'>
                            <option value='Alimentos y Bebidas'>Alimentos y Bebidas</option>
                            <option value='Equipo Computo'>Equipo Computo</option>
                            <option value='Equipo Construcción'>Equipo Construcción</option>
                            <option value='Suministros Oficina'>Suministros Oficina</option>
                        </Select>
                    </FormControl>

                    <Button type='submit'>Guardar nuevo producto</Button>
                </FormControl>
            </Box>
            {/* <p>{
                listCreated.map((e,id) => {
                    return(
                        <p key={id}>{e.productDescription}</p>
                    )
                })
            }</p> */}
        </Box>
        </>
    )
}
