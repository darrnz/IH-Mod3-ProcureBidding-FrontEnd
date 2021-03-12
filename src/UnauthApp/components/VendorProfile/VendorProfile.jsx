import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import TenderContext from '../../../context/tenders/TenderContext'
import { Box, Button, Text,
    Table, Thead, Tbody, Tr, Th, Td, } from '@chakra-ui/react'
    import { Link } from 'react-router-dom'
    
export default function VendorProfile(props) {

    const authContext = useContext(AuthContext)
    const { usuario } = authContext;
    const history = useHistory()

    const ctxTender = useContext(TenderContext)
    const { tenders, listUserTenders } = ctxTender
    useEffect(() => {
        
        
    }, [])



    if(usuario.role==='Admin') {
        history.push('/purchaser')
    }
    return (
        <div>

            HolaVendor


            <Text mt={10} fontSize="3xl">Licitaciones actuales</Text>  
                <Box mt={5} mx={40} d='flex' flexDir='row' justifyContent='space-around' alignContent='center'>
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
                    usuario == null ? <p>cargando...</p> :
                    usuario.idTender.map((e,id) => {
                        return (
                            <Tr key={e._id}>
                                <Td>{e.tenderTitle}</Td>
                                <Td>{new Date(e.startDate).toDateString()}</Td>
                                <Td>{new Date(e.endDate).toDateString()}</Td>
                                <Td>{e.status}</Td>
                                <Td  d='flex' flexDir='row' justifyContent='space-evenly' alignContent='center' alignItems='center'>
                                    <Button><Link to={`/tender/${e._id}`}>Detalles</Link></Button>
                                </Td>
                                <Td>{new Date(e.updatedAt).toDateString()}</Td>
                            </Tr>  
                        )
                    })
                } 
                </Tbody>
                </Table>
            </Box>
        </div>
    )
}
