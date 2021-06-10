import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import DesktopSubNav from './DesktopSubNav'
import NavItem from './NavItem'
import { Box, Flex, Text,IconButton, Button,Stack,
        BreadcrumbItem, Breadcrumb
} from '@chakra-ui/react';
import AuthContext from '../../context/auth/AuthContext'
import Loader from '../layout/Loader';

export default function DesktopNav () {

    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado()
    },[])

    return (
        <Stack direction={'row'} >
                <Box >
                    {
                        usuario == null ? '' :
                            usuario.role === 'Admin' ? 
                                <Box mt={8} alignItems='center' alignContent='space-around' >
                                    <Breadcrumb>
                                    <BreadcrumbItem>
                                    <NavLink
                                        style={{fontSize:'21px',paddingRight:'5px', 
                                                paddingLeft:'5px' ,fontWeight:600,  
                                                textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                        href={'/login'}
                                        to='/purchaser'
                                    >
                                        Licitaciones
                                    </NavLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                    <NavLink
                                    style={{fontSize:'21px',paddingRight:'5px', 
                                            paddingLeft:'13px' ,fontWeight:600,  
                                            textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                        to='/purchaser/item-list'
                                    >
                                        Productos
                                    </NavLink>
                                    </BreadcrumbItem>
                                    </Breadcrumb>
                                </Box>
                            :
                                <Box mt={8} alignItems='center' alignContent='space-around'>    
                                    <NavLink
                                    style={{fontSize:'21px',paddingRight:'5px', 
                                            paddingLeft:'13px' ,fontWeight:600,  
                                            textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                    to='/vendor'
                                >
                                        Licitaciones
                                    </NavLink>
                                </Box>
                    }      
            </Box>
        </Stack>
    );
};
