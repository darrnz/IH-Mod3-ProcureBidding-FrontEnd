import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../../context/auth/AuthContext'
import {
    Box, Table, Thead, Tbody, Tr, Th, Td, Button, Text
        } from "@chakra-ui/react"
import AddProduct from './AddProduct'
import { BsPlusCircle } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import TenderContext from '../../../context/tenders/TenderContext'
import Loader from '../../layout/Loader'


export default function ListProducts(props) {

    const authContext = useContext(AuthContext)
    const {  usuario, usuarioAutenticado } = authContext;

    const ctxTender = useContext(TenderContext)
    const { listProductsInv, listProducts } = ctxTender

    useEffect(() => {
        usuarioAutenticado()
        listProductsInv()
    }, [])


    console.log(usuario)
    const [activeAdd, setActiveAdd] = useState(true)

    const handleAddPrdBtn = () => {
        activeAdd === true ? setActiveAdd(false): setActiveAdd(true)
    }

    if(!usuario) return null;
    return (
        <Box>

            <Text mt={10} fontSize="3xl">Listado de productos disponibles</Text>

            <Box my={50}>
                <Box>
                    {
                        activeAdd? <Button size="lg"  colorScheme="teal" variant="outline"
                                    width="200px" onClick={() => handleAddPrdBtn()} 
                                    leftIcon={<BsPlusCircle />}>Añadir producto</Button> 

                                    : <Button size="lg" mb={5} colorScheme="red" variant="outline"
                                    width="200px" onClick={() => handleAddPrdBtn()} 
                                        leftIcon={<RiCloseCircleLine />}>Cerrar</Button>    
                    }
                    {
                        activeAdd? '' : <AddProduct />
                    }
                </Box>
            
            <Box my={10} mx={150}>
                <Table variant="simlpe" colorScheme="whiteAlpha"  size='md'>
                    <Thead textAlign='center' borderBottom='solid' >
                        <Tr>
                            <Th>ID</Th>
                            <Th>Descripción</Th>
                            <Th>Familia</Th>
                            <Th>Pz x UND</Th>
                            <Th>UND</Th>
                        </Tr>
                    </Thead>
                        <Tbody>        
                            {listProducts==null? <Loader/> :
                                listProducts.map((e,id) => {
                                    return(
                                        <Tr key={id} borderBottom='solid thin' >
                                            <Td>{e.idLocal}</Td>
                                            <Td>{e.productDescription}</Td>
                                            <Td >{e.productFamily}</Td>
                                            <Td>{e.boxSize}</Td>
                                            <Td>{e.uom}</Td>
                                        </Tr>
                                    )
                                })
                            }
                        
                        </Tbody>
                    </Table>
                </Box>
            </Box>
                
        </Box>
    )
}
