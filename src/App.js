import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TenderState from './context/tenders/TenderState'
import AuthState from './context/auth/AuthState'
/* import AlertaState from './context/alerts/AlertState' */
import tokenAuth from './services/token'
import RutaPrivada from './UnauthApp/components/rutas/RutaPrivada'
import { ThemeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './UnauthApp/components/Login'
import Signin from './UnauthApp/components/Signin'
import MainPage from './UnauthApp/components/MainPage'
import PurchaserProfile from './UnauthApp/components/Purchaser/PurchaserProfile'
import VendorProfile from './UnauthApp/components/VendorProfile/VendorProfile'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,MobileNav, DesktopNav,
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
  /* import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon} from '@chakra-ui/icons'; */
import ListProducts from './UnauthApp/components/Purchaser/ListProducts'
import TenderDetails from './UnauthApp/components/Purchaser/TenderDetails'
import AuthContext from './context/auth/AuthContext'

export default function App() {
    ////determinar q rutas osn provadas
    const { isOpen, onToggle } = useDisclosure();
    return (
        <ChakraProvider >
        <AuthState>
        <TenderState>
            <Router>

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
                   {/*  <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text> */}

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
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signin}/>
                    <RutaPrivada  exact path='/vendor' component={VendorProfile} />
                    <Route exact path='/purchaser' component={PurchaserProfile} /> 
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/tender/:idTender' component={TenderDetails} />
                <Route exact path='/purchaser/item-list' component={ListProducts} />
                </Switch>
            </Router>
            </TenderState>
        </AuthState>
        </ChakraProvider>
    )
}
