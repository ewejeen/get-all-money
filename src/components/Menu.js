import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Box
  } from "@chakra-ui/react"
  import {HamburgerIcon} from '@chakra-ui/icons'
  
const Menu = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    const activeStyle = {
        color: 'teal',
        textDecoration: 'underline'
    }
    
    return (
        <Box m={3}>
            <IconButton ref={btnRef} 
                colorScheme="teal" 
                aria-label="Nav"
                icon={<HamburgerIcon />}
                onClick={onOpen} />            
            
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <ul>
                        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                        <li><NavLink to="/bank" activeStyle={activeStyle}>은행별 예적금</NavLink></li>
                        <li><NavLink to="/interest" activeStyle={activeStyle}>금리별 예적금</NavLink></li>
                        </ul>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>Close</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Menu;