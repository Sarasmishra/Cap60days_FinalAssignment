import {Box,Heading,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


export function Home(){
    const navigate = useNavigate()
    function handleClick(){
        console.log("Kuch aur proceeses and then")
        navigate("/login")
    }
    
    
    
    return(
       <Box>

        <Heading as="h1" size="xl">
            Home page
        </Heading>
        <Button colorScheme='red' variant='solid' onClick={handleClick}>
            login Page
        </Button>
       </Box> 
    )
}