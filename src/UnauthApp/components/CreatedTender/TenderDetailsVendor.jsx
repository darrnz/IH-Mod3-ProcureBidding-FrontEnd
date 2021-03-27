import React, { useContext, useEffect, useState } from 'react'
import TenderContext from '../../../context/tenders/TenderContext'
import { useParams } from 'react-router-dom'
import AuthContext from '../../../context/auth/AuthContext'
import { Box, Text, FormControl, Flex, Grid, GridItem, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import Loader from '../../layout/Loader'
import { set } from 'mongoose'
export default function TenderDetails(props) {

    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado } = authContext;

    const context = useContext(TenderContext)
    const { tenderDetails, tenderInfo, tenderProds, tenderVendor } = context
    let { idTender } = useParams()

    let [quotedProducts, setQuotedProducts] = useState(
        [{
            quantity:'',
            idLocal: '',
            productDescription:'',
            boxSize:'',
            uom:'',
            skuVendor:'',
            price:0,
            totalProduct:0
        }]
    )
    console.log(quotedProducts)
    
    useEffect( ()  => {
        tenderDetails(idTender)
        }, [])
    
    let products = tenderInfo['tenderProducts']
    
    if(usuario == null) {
        return(<Loader />)
    }

    const onChangeHandle = (event, i, elem) => {
        event.preventDefault()
        quotedProducts[i] = { 
            //...quotedProducts,
            quantity:elem.quantity,
            idLocal: elem.idLocal,
            productDescription:elem.productDescription,
            boxSize: elem.boxSize,
            uom: elem.uom,
            skuVendor: elem.skuVendor,
            price: event.target.value,
            totalProduct: parseFloat(event.target.value) * elem.quantity
            }
        setQuotedProducts( quotedProducts )

        
        console.log(quotedProducts)      
    }

    const calculateProductPrice = (i,qty) =>{
        //event.preventDefault()
        let elemPrice = quotedProducts.find((e,index,arr) => {
            if(arr.indexOf(e) === i){
                return e.price   
            }
            
        })
        
        return elemPrice * qty
    }
    

    return (
        <>
            
            <Box as='main' d='flex' alignItems='center' flexDir='column'>
                {/* Tender General info */}
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


                <Box>
                    <Text my={2} fontSize="xl">Productos</Text>
                    <Box d='flex' h={200}  style={{overflow:'auto'}}  w={900} flexWrap='wrap' alignItems='center'>
                        {  
                            <Box d='flex' h={150}    w='auto' alignItems='center'>
                            <Grid templateColumns="1fr 2fr 1fr 1fr 1fr 1fr" style={{overflow:'auto'}} templateRows='1fr'>
                                <Box w="100%" h="10">Id Empresa</Box>
                                <Box w="100%" h="10">Productos</Box>
                                <Box w="100%" h="10">Cantidad</Box>
                                <Box w="100%" h="10">UDM</Box>
                                <Box w="100%" h="10">Precio</Box>
                                <Box w="100%" h="10">Total</Box>
                            {   products == null ? <Loader/> : 
                                products.map((e,id )=> {
                                return(
                                    <>
                                        <GridItem mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>{e.idLocal}</GridItem>
                                        <GridItem mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'
                                            textAlign='left'
                                        >{e.productDescription}</GridItem>
                                        <GridItem mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>{e.quantity}</GridItem>
                                        <GridItem mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>{e.uom}</GridItem>
                                        <GridItem  mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>
                                            <InputGroup>
                                            <InputLeftAddon children="$MXN" fontSize='small' />
                                                <Input  id={`price_${id}`} type='number' defaultValue={0} name='price' onChange={(event) => onChangeHandle(event, id, e)}/>
                                            </InputGroup>
                                        </GridItem>
                                        <GridItem  mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>
                                            <InputGroup>
                                            <InputLeftAddon children="$MXN" fontSize='small' /> 
                                            <Input  id={`price_${id}`} type='number' defaultValue={quotedProducts[id].totalProduct} name='price' />
                                            </InputGroup>
                                        </GridItem>                                        
                                        
                                    </>    
                                    )    
                                }) 
                            }
                            </Grid>  
                            </Box>
                            
                            }
                    </Box>
                </Box>

        </Box>
        
    </>
    )
}
