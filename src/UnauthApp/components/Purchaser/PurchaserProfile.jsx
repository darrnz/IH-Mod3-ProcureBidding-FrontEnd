import React from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import { Switch, Route, Redirect, Link} from 'react-router-dom'
import ListTenders from './ListTenders'
import AddTender from './AddTender'
import TenderDetails from './TenderDetails'

export default function PurchaserProfile() {
    return (
        <>
            <Box> 
                <Link to='/purchaser/item-list'>Lista Productos</Link>
            
                <Box>
                    <Button>New Tender</Button>
                    <AddTender/>
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
