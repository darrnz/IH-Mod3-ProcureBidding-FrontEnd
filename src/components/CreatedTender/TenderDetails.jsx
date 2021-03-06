import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TenderContext from '../../context/tenders/TenderContext'
import AuthContext from '../../context/auth/AuthContext'
import TenderDetailsVendor from './TenderDetailsVendor'
import TenderDetailsPurchaser from './TenderDetailsPurchaser'
import Loader from '../layout/Loader'

export default function TenderDetails() {

    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado } = authContext;

    const context = useContext(TenderContext)
    const { tenderDetails, tenderInfo, tenderProds, tenderVendor } = context

    let { idTender } = useParams()
    
    useEffect( ()  => {
        tenderDetails(idTender)
        }, [])
    
    if(usuario == null) {
        return(<Loader />)
    }
    

    return (
        <>
            {    usuario == null ? <Loader /> : 
                        usuario.role === 'Vendor' ? 
                        <TenderDetailsVendor /> 
                        : <TenderDetailsPurchaser />
                }   

{/* 
            <Box as='main' d='flex' alignItems='center' flexDir='column'>
                <Box as='form' w={1000} mt={15}d='flex' alignItems='center' alignContent='center' bg='white'  boxShadow="lg">
                    <FormControl as='fieldset' border='solid' 
                        borderColor='lightgray' p={5} borderRadius={6}  >
                        <Text my={2} fontSize="xl">Información general</Text>
                        <Text as='b' fontSize="lg">{tenderInfo.tenderTitle}</Text>
                        <Flex flexDirection='row' justifyContent='center' >
                            <Box d='flex' flexDirection='column'>
                                <Text   fontSize="lg">Fecha Incio:<b>{`${new Date(tenderInfo.startDate).getFullYear()}/${new Date(tenderInfo.startDate).getMonth() < 10 ? "0" + new Date(tenderInfo.startDate).getMonth():new Date(tenderInfo.startDate).getMonth()}` }</b></Text> 
                                <Text   fontSize="lg">Fecha Fin: <b>{`${new Date(tenderInfo.endDate).getFullYear()}/${new Date(tenderInfo.endDate).getMonth() < 10 ? "0" + new Date(tenderInfo.endDate).getMonth():new Date(tenderInfo.endDate).getMonth()}` }</b></Text>  
                            </Box>
                            <Box d='flex' ml={8} flexDirection='column'>
                                <Text textAlign='center'>Información general</Text>
                                <Text  fontSize="lg">{tenderInfo.generalInfo}</Text>  
                            </Box>
                        </Flex>   
                    </FormControl>
                </Box>

                {    usuario == null ? <Loader /> : 
                        usuario.role === 'Vendor' ? 
                        "" : 'Hola'


                }   

                <Box>
                    <Text my={2} fontSize="xl">Productos</Text>
                    <Box d='flex' h={200}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                        {  
                            <Box d='flex' h={150}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                            {   products == null ? <Loader/> : 
                                products.map((e,id )=> {
                                return(
                                    
                                        <Box d='flex'  width={80}   flexWrap='wrap' flexDirection='row'  m={1}
                                            border='solid' borderColor='lightslategray' borderWidth='thin'
                                        >
                                            <Box  w="100%" mr={5} d='flex' textAlign='left'>{e.productDescription}</Box>
                                            <Box fontSize='sm' w="100%" d='flex' textAlign='left'><b>Qty: </b> {e.quantity}</Box>
                                        </Box>
                                    )    
                                }) 
                            }
                            
                            </Box>    
                            }
                    </Box>
                </Box>

            
                    <Box>
                        <Text mt={3} fontSize="xl">Proveedres</Text>
                        <Box d='flex' h={150}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                            {
                                <Box d='flex' h={150}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'> {
                                vendors == null ? <Loader/> : 
                                vendors.map((e,id) => { 
                                    return(
                                        <Box d='flex'  width={80}   flexWrap='wrap' flexDirection='row' alignContent='center'  m={1}
                                            border='solid' borderColor='lightslategray' borderWidth='thin'
                                        >
                                            <Box w="100%" mr={5} d='flex' textAlign='left'>{e.companyName}</Box>
                                            <Box as='small'  w="100%" d='flex' textAlign='left'>Contacto: {e.email}</Box>
                                        </Box>
                                        )
                                })
                                }
                                </Box> 
                            }
                        </Box>
                    </Box>
        </Box>
         */}
    </>
    )
}
