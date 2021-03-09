import React, { useState, useEffect } from 'react'

import {
    Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button} from "@chakra-ui/react"
import AddProduct from './AddProduct'
import { BsPlusCircle } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import axios from 'axios'


export default function ListProducts() {

    const [activeAdd, setActiveAdd] = useState(true)
    const [productsList, setProductsList] = useState([])

    const handleAddPrdBtn = () => {
        activeAdd === true ? setActiveAdd(false): setActiveAdd(true)
    }
    
    useEffect(() => {
        const listProducts = async() => {
            let resSer = await axios.get('http://localhost:3001/list-products')
            console.log(resSer)
            setProductsList(resSer.data)
            console.log(productsList)
        }
        listProducts()
        console.log(productsList)
    }, [])
    console.log(productsList)
    return (
        <>
            <Box>
            {
                activeAdd? <Button width="200px" onClick={() => handleAddPrdBtn()} leftIcon={<BsPlusCircle />}>Añadir producto</Button> 
                : <Button width="200px" onClick={() => handleAddPrdBtn()} leftIcon={<RiCloseCircleLine />}>Cerrar</Button>    
            }
            {
                activeAdd? '' : <AddProduct />
            }
            </Box>
            
            <Table variant="simple">
                <Thead>
                    <Tr>
                    <Th>ID</Th>
                    <Th>Descripción</Th>
                    <Th>Familia</Th>
                    <Th>Pz x UND</Th>
                    <Th>UND</Th>
                    <Th>Precio</Th>
                    <Th>Última Act.</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    
                        {
                            productsList.map((e,id) => {
                                return(
                                    <Tr key={id}>
                                    <Td>{e.idLocal}</Td>
                                    <Td>{e.productDescription}</Td>
                                    <Td >{e.productFamily}</Td>
                                    <Td>{e.boxSize}</Td>
                                    <Td>{e.uom}</Td>
                                    <Td>$$</Td>
                                    <Td>{new Date(e.updatedAt).toDateString()}</Td>
                                    </Tr>
                                    )
                            })
                        }
                
                </Tbody>
                </Table>
        </>
    )
}
