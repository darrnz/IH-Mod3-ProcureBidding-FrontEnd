import React, { useEffect, useState, useContext } from 'react'
import { Box, Input, Button, Text, FormControl, FormLabel, Select} from '@chakra-ui/react'
import clienteAxios from '../../../services/axios'
import AuthContext from '../../../context/auth/AuthContext'
import TenderContext from '../../../context/tenders/TenderContext'


export default function AddProduct(props) {
    const authContext = useContext(AuthContext)
    const {  usuario, usuarioAutenticado } = authContext;
    const ctxTender = useContext(TenderContext)
    const { listProductsInv, listProducts, addProdToList } = ctxTender

    const [value, setValua] = React.useState('Equipo Computo')
    function setFam(value) {
        setNewProduct({...newProduct, productFamily: value})
    }  
    const [newProduct, setNewProduct] = useState(
        {
            idCreator: usuario._id,
            idLocal: '',
            productDescription: '',
            boxSize: 1,
            uom:'',
            productFamily: value,
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
        
    }

    const onClickAdd = async ( e ) => {
        e.preventDefault()
       
        let createdProd = await clienteAxios.post('/create-product', newProduct)
        addProdToList(createdProd.data)
        setNewProduct({
            idCreator: usuario._id,
            idLocal: '',
            productDescription: '',
            boxSize: 1,
            uom:'',
            productFamily: value,
        })
    }


    return (
        <>
        <Box as='main'  d='flex' alignItems='center' flexDir='column'>
            
            <Box as='form'  w={1000} d='flex' alignItems='center'
                alignContent='center' bg='white'  boxShadow="lg" onSubmit={(e) => onClickAdd(e)}>
                <FormControl as='fieldset' border='solid' 
                        borderColor='lightgray' p={5} borderRadius={6}  >
                    <Text my={2} fontSize="xl">Agrega los detalles del nuevo producto</Text>
                    <Box d='flex' justifyContent='center' flexDirection='row'  m="4"   >
                        <FormControl id="idLocal" mb={5} mr={3} w={200}>
                            <FormLabel>ID</FormLabel>
                            <Input 
                                
                                type='text' 
                                name='idLocal'
                                placeholder='Código de tu inventario'
                                onChange={(e) => {handleChange(e)}}
                            />
                        </FormControl>

                        <FormControl id="description" mb={5}>
                            <FormLabel>Descripción</FormLabel>
                            <Input 
                                type='text'
                                name='productDescription'
                                placeholder='Descripción: tipo, medidas, color, material, etc.' 
                                onChange={(e) => {handleChange(e)}}
                            />
                        </FormControl>
                    </Box>
                    <Box d='flex' justifyContent='center' flexDirection='row'  m="4"   >
                        <FormControl id="uom" mb={5} mr={3} w={200}>
                            <FormLabel>UDM</FormLabel>
                            <Input 
                                type='text'
                                name='uom'
                                placeholder='Unidad de medida ej. kg, lt, paq.' 
                                onChange={(e) => {handleChange(e)}}
                            /> 
                        </FormControl>

                        <FormControl id="boxSize" mb={5} mr={3} w={200}>
                            <FormLabel>Pz x UDM</FormLabel>
                            <Input 
                                type='number'
                                name='boxSize'
                                placeholder='Piezas por Unidad (agrega un número)' 
                                onChange={(e) => {handleChange(e)}}
                            /> 
                        </FormControl>


                        <FormControl id="productFamily">
                            <FormLabel>Familia del producto</FormLabel>
                            <Select colorScheme='yellow' onChange={(e) => {handleChange(e)}} 
                                placeholder="Selecciona el grupo de tu producto" name='productFamily'
                            >
                                <option value='Alimentos y Bebidas'>Alimentos y Bebidas</option>
                                <option value='Equipo Computo'>Equipo Computo</option>
                                <option value='Equipo Construcción'>Equipo Construcción</option>
                                <option value='Suministros Oficina'>Suministros Oficina</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button Button size="lg"  colorScheme="teal" variant="outline"
                            width="250px" type='submit'>Guardar nuevo producto</Button>
                </FormControl>
            </Box>
        </Box>
        </>
    )
}
