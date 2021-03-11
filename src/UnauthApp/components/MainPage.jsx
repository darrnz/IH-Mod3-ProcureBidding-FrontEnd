import { Image,Box  } from '@chakra-ui/react'
import React from 'react'
import imgage from '../../images/Digital-Procurement-Bank-SIPMM-1280x720.jpg'

export default function MainPage() {
    return (
        <div>
            <Image src={imgage}  />
            <Box as='footer'>Naak' eProcurement -- 2021</Box>
        </div>
    )
}
