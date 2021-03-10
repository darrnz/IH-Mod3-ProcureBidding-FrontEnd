import React,{useContext} from 'react'
import { Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import MainPage from './components/MainPage'
import PurchaserProfile from './components/Purchaser/PurchaserProfile'
import VendorProfile from './components/VendorProfile/VendorProfile'
import ListProducts from './components/Purchaser/ListProducts'
import TenderDetails from './components/Purchaser/TenderDetails'
import AuthContext from '../context/auth/AuthContext'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,MobileNav, DesktopNav,
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
import Profile from '../AuthApp/components/Profile'
  /* import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon} from '@chakra-ui/icons'; */

export default function UnauthApp() {
    
/*     const context = useContext(AuthContext)
    const { usuario } = context
    console.log(usuario) */

    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'}
                    py={{ base: 2 }} px={{ base: 4 }} borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        {/* <DesktopNav /> */}
                    </Flex>
                    </Flex>

                    <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                        <Link to='/purchaser/item-list'>Lista PRoductos</Link>
                        <Link to='/purchaser'>Comprador</Link>
                        <Link to='/app/profile'>Vendedor</Link>
                         {/* <Link to='/signup'></Link>
                        <Link to='/login'>Login</Link> */}
                        <Link to='/app/profile'>PRofileAdmin</Link>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'/login'}>
                    Inicia Sesión
                    </Button>

                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'red.400'}
                        
                        href={'/signup'}
                        _hover={{
                        bg: 'pink.300',
                        }}>
                        Iniscribete
                    </Button>
                    </Stack>
                </Flex>

                {/* <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse> */}
            </Box>



            <Switch>
                <Route exact path='/' component={MainPage} />
               {/*  <Route exact path='/purchaser' component={PurchaserProfile} />  */}
               {/*  <Route exact path='/vendor' component={Profile} />  */}
                {/* <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signin} /> */}
                <Route exact path='/tender/:idTender' component={TenderDetails} />
                <Route exact path='/purchaser/item-list' component={ListProducts} />
            </Switch>  
        </>
    )
}
