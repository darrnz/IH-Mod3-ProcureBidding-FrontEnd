
import React, { useEffect, useContext } from 'react'
import { Box, Button, Text,
    Table, Thead, Tbody, Tr, Th, Td, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import TenderContext from '../../../context/tenders/TenderContext'
import AuthContext from '../../../context/auth/AuthContext'
import Loader from '../../layout/Loader'

export default function ListTenders(props) {
    
    const authContext = useContext(AuthContext)
    const { usuario } = authContext;

    const ctxTender = useContext(TenderContext)
    const { tenders, listUserTenders } = ctxTender
    console.log(tenders)
    useEffect(() => {
        
        
    }, [])
   
    
    return (
        <>
            <Text mt={10} fontSize="3xl">Licitaciones actuales</Text>  
                <Box mt={5} mx={40} d='flex' flexDir='row' justifyContent='space-around' alignContent='center'>
                    <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>Nombre Licitación</Th>
                        <Th>Fecha Inicio</Th>
                        <Th>Fecha Fin</Th>
                        <Th>Status</Th>
                        <Th>Detalle</Th>
                        <Th>Última Act.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                {   
                    usuario == null ? <Loader/> :
                    usuario.idTender.map((e,id) => {
                        return (
                            <Tr key={e._id}>
                                <Td>{e.tenderTitle}</Td>
                                <Td>{new Date(e.startDate).toDateString()}</Td>
                                <Td>{new Date(e.endDate).toDateString()}</Td>
                                <Td>{e.status}</Td>
                                <Td  d='flex' flexDir='row' justifyContent='space-evenly' alignContent='center' alignItems='center'>
                                    <Button><Link to={`/tender/${e._id}`}>Detalles</Link></Button>
                                    {/* <Button>Editar</Button> */}
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
