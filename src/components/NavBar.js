import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../actions/AuthAction'
import { AuthContext } from '../context/authContext'
// import Buscador from './Buscador'



const NavBar = () => {

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    

    return (
        <Flex
            bg="#a18cd1"
            w="100%"
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="left" alignItems="center">
                <Image maxWidth="20%"
                    src="https://res.cloudinary.com/vrilli/image/upload/v1647800085/580b57fcd9996e24bc43c52f_qdz900.png"
                    size={20}
                />
                <Text pl={3} color="white" fontSize="20px">
        
                </Text>
            </Flex>
            <Box display="flex" justifyContent="space-around" alignItems="center">
                <Link
                    as={NavLink}
                    to="/home"
                    px={2}
                    fontSize="25px"
                    style={({ isActive }) => isActive ? { color: "Black" } : { color: "lightgrey" }}
                >
                    Home</Link>
 
                {/* <Buscador />  */}
                <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogout}>Logout</Button>
            </Box>
    

        </Flex >
    )
}

export default NavBar
