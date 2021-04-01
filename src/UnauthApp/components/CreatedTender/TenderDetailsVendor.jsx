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

    const [quoteTotal, setQuoteTotal] = useState(0)
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
        calculateQuoteTotal()
        setQuotedProducts( quotedProducts )
        
        console.log(quotedProducts)      
    }

    const calculateProductPrice = (i,qty) =>{
        //event.preventDefault()
        let elemPrice = quotedProducts.find((e,index,arr) => {
            if(arr.indexOf(e) === i){
                return e.totalProduct   
            }
            
        })
        
        return elemPrice * qty
    }

    const calculateQuoteTotal = () => {
        let total = Object.keys(quotedProducts).map(key => quotedProducts[key].totalProduct).reduce((a,b)=> a+b)
        console.log(total)
        setQuoteTotal(total)
        console.log(quoteTotal)
    }
    console.log(quoteTotal)
    
    

    return (
        <>
            
            <Box as='main' d='flex' alignItems='center' flexDir='column' h='100%' my={10}>
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
                    <Box d='flex'  w={1000} flexWrap='wrap' alignItems='center'>
                        {  
                            <Grid mt={5} templateColumns="1fr 2fr 1fr 1fr 1fr 1fr" templateRows='1fr'>
                                <GridItem w="100%" h="20">Id Empresa</GridItem>
                                <GridItem w="100%" h="20">Productos</GridItem>
                                <GridItem w="100%" h="20">Cantidad</GridItem>
                                <GridItem w="100%" h="20">UDM</GridItem>
                                <GridItem w="100%" h="20">Precio x UND (MXN)</GridItem>
                                <GridItem w="100%" h="20">Total</GridItem>
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
                                            <InputGroup mx={2} mb={2}>
                                            <InputLeftAddon children="$MXN" fontSize='small' />
                                                <Input  id={`price_${id}`} type='number' defaultValue={0} name='price' onChange={(event) => onChangeHandle(event, id, e)}/>
                                            </InputGroup>
                                        </GridItem>
                                        <GridItem  mb={2} borderBottomColor='lightslategray' borderBottomWidth='thin'>
                                            <InputGroup mx={1} mb={2}>
                                            <InputLeftAddon children="$MXN" fontSize='small'/> 
                                            <Input  id={`price_${id}`} type='number'  name='totalProduct' 
                                                value={quotedProducts.find((el,i,arr) => arr.indexOf(el) === id) === undefined ? '0' : quotedProducts.find((el,i,arr) => arr.indexOf(el) === id).totalProduct} />
                                            </InputGroup>
                                        </GridItem>                                        
                                        
                                    </>    
                                    )    
                                }) 
                            }
                            <GridItem colSpan={6}  pr={5} textAlign='right' fontSize='large' fontWeight='bold'>Total: ${quoteTotal} MXN</GridItem>
                            
                            </Grid>  
                            
                            
                            }
                            
                    </Box>
                </Box>

        </Box>
        
    </>
    )
}
