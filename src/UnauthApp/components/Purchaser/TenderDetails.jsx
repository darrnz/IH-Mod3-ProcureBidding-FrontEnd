import React, { useContext, useEffect } from 'react'
import TenderContext from '../../../context/tenders/TenderContext'
import { useParams } from 'react-router-dom'
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/layout'

export default function TenderDetails() {

    const context = useContext(TenderContext)
    const { tenderDetails, tenderInfo } = context

    let { idTender } = useParams()

    useEffect( ()  => {
        tenderDetails(idTender)
        console.log(tenderInfo)
    }, [])
    
    /* let vendors = tenderInfo['idVendor']
    console.log(vendors) */

    return (
        <div>
        {/* {
            tenderInfo === null ? '' : 
            <Box>
            <Text>{tenderInfo.tenderTitle}</Text>
            <Text>{tenderInfo.status}</Text>
            <Text>{tenderInfo.generalInfo}</Text>
            </Box>
        } */}
            
            {/* <ul>{
                vendors.map((e,id) => {
                    return(
                        <li>
                            {e.address}
                        </li>
                    )
                })
            }</ul> */}
        </div>
    )
}
