import { Image,Box  } from '@chakra-ui/react'
import React from 'react'
import imgage from '../../images/Digital-Procurement-Bank-SIPMM-1280x720.jpg'

export default function MainPage() {
    return (
        <div>
            <h1>Esta es la pagina principal</h1>
            <Image src={imgage}  />
            <Box as='footer'>Footer</Box>
        </div>
    )
}
