import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Button} from "@chakra-ui/react"
import AddProduct from './AddProduct'
import { BsPlusCircle } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'

export default function ProductList() {

    const [activeAdd, setActiveAdd] = useState(true)

    const handleAddPrdBtn = () => {
        activeAdd === true ? setActiveAdd(false): setActiveAdd(true)
    }

    return (
        <>
            {
                activeAdd? <Button width="200px" onClick={() => handleAddPrdBtn()} leftIcon={<BsPlusCircle />}>Add Product</Button> 
                : <Button width="200px" onClick={() => handleAddPrdBtn()} leftIcon={<RiCloseCircleLine />}>Close</Button>    
            }
            {
                activeAdd? '' : <AddProduct />
            }
            
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                    <Th>ID</Th>
                    <Th>Description</Th>
                    <Th>Family</Th>
                    <Th>Box Size</Th>
                    <Th>Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>

                    </Tr>
                </Tbody>
                </Table>
        </>
    )
}
