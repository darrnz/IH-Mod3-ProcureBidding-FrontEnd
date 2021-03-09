import React, { useEffect, useState } from 'react'
import { Box, Button, Text,
    Table, Thead, Tbody, Tr, Th, Td, TableCaption,} from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ListTenders() {
    
    const [listUserTenders, setListUserTenders] = useState([])

    useEffect(() => {
        const getPurchaserTenders = async() => {
            let resSer = await axios.get('http://localhost:3001/profile/purchaser')
            console.log(resSer.data.idTender)
            setListUserTenders(resSer.data.idTender)
        }
        getPurchaserTenders()
    }, [])
    
    return (
        <>
                <Box mt={5} d='flex' flexDir='row' justifyContent='space-around' alignContent='center'>
                    <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>Nombre Licitación</Th>
                        <Th>Fecha Inicio</Th>
                        <Th>Fecha Fin</Th>
                        <Th>Status</Th>
                        <Th>Detalle/editar</Th>
                        <Th>Última Act.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                {
                    listUserTenders.map((e,id) => {
                        return (
                            <Tr key={e._id}>
                                <Td>{e.tenderTitle}</Td>
                                <Td>{new Date(e.startDate).toDateString()}</Td>
                                <Td>{new Date(e.endDate).toDateString()}</Td>
                                <Td>{e.status}</Td>
                                <Td  d='flex' flexDir='row' justifyContent='space-evenly' alignContent='center' alignItems='center'>
                                    <Button>Ver Detalle</Button>
                                    <Button>Editar</Button>
                                    <Link to={`/tender/${e._id}`}>Detalles</Link>
                                </Td>
                                <Td>{new Date(e.updatedAt).toDateString()}</Td>
                            </Tr>  
                        )
                    })
                } 
                </Tbody>
                </Table>
            </Box>
        </>
    )
}
