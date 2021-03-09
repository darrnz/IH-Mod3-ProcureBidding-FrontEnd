import React, { useState, useEffect } from 'react'
import { Box, Input, Button, Radio, RadioGroup, Stack, Text,
        FormControl, FormLabel,
        List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import ListProducts from './ListProducts'
import axios from 'axios'
import { useParams } from 'react-router-dom'




export default function AddDeleteVendorTender() { 

    const { idTender } = useParams()

    return (
        <>
            <Box>
                <Box>
                    <Text as='h3'>Selecciona los Proveedores que participarán</Text>
                    <UnorderedList>
                        {/* Aqui va un map con los proveedores existentes */}
                    </UnorderedList>
                </Box>
                <Box>
                    <Text as='h3'>Proveedores Seleccionados</Text>
                    <UnorderedList>
                        {/* AQui va un map de los prov seleccionados */}
                    </UnorderedList>
                </Box>
            </Box>  
        </>
    )
}
