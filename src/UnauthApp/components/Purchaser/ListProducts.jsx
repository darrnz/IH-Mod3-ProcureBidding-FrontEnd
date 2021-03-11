import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../../context/auth/AuthContext'
import {
    Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button} from "@chakra-ui/react"
import AddProduct from './AddProduct'
import { BsPlusCircle } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import TenderContext from '../../../context/tenders/TenderContext'


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
                    </Tr>
                </Thead>
                <Tbody>
                    
                        {   listProducts==null? <p>cargando</p> :
                            listProducts.map((e,id) => {
                                return(
                                    <Tr key={id}>
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
        </>
    )
}
