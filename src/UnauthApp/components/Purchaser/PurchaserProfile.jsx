import React, { useContext } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import ListTenders from './ListTenders'
import AddTender from './AddTender'
import TenderDetails from './TenderDetails'
import TenderContext from '../../../context/tenders/TenderContext'


export default function PurchaserProfile() {

    const ctxTender = useContext(TenderContext)
    const { newTender, closeAndClearTender, tenderForm  }  = ctxTender

    const createTender = (e) => {
        e.preventDefault()
        newTender()
    }

    const closeNewTender = (e) => {
        e.preventDefault()
        closeAndClearTender()
    }
 
    return (
        <>
            <Box> 
                <Link to='/purchaser/item-list'>Lista Productos</Link>
            
                <Box>
                    {
                        tenderForm? <Button onClick={(e) => closeNewTender(e)}>Clear and Close</Button>  : <Button onClick={(e) => createTender(e)}>New Tender</Button>
                    }
                    
                    {
                        tenderForm?<AddTender/>:''
                    }
                    
                </Box>
                <Box>
                    <Text>Licitaciones actuales</Text>
                    <ListTenders/>
                </Box>
                <Box>
                    <TenderDetails />
                </Box>
            </Box>
        </>
    )
}
