import { Link as ReactRouterLink } from "react-router-dom"
import {Link as ChakraLink, textDecoration,Button} from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
export function Navbar(){
const {logout} = useContext(AuthContext)


    const links=[{
        to:"/",
        label:"Home",
    },
    {
        to:"/contact",
        label:"Contact",
    },
    {
        to:"/about",
        label:"About",
    },
    {
        to:"/login",
        label:"Login",
    }
    ,{
        to:"/tickets",
        label:"Tickets"
    },
]
return (
    <Flex justify="space-around" align="center" padding={4} background="gray.200">
        {
            links?.map(link=>(
                <ChakraLink as={ReactRouterLink} key={link.to} to={link.to}   color="gray.900" _hover={{textDecoration:"none"}}>{link.label}</ChakraLink>
            ))
            
        }
        <Button colorScheme='red' variant='solid' onClick={logout}>Logout</Button>
    </Flex>
)
}