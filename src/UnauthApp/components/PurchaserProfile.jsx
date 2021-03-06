import React from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import ProductList from './ProductList'

export default function PurchaserProfile() {
    return (
        <>
            <Box>
                <Box>
                    <Button>New Tender</Button>
                </Box>
                <Box>
                    <Button>Item List</Button>
                    <ProductList />
                </Box>
            </Box>
        </>
    )
}
