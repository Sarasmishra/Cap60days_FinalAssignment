import {Box,Heading,Input,Button,VStack,Container} from '@chakra-ui/react'
import { useState ,useContext} from 'react'
import axios from 'axios'
import { AuthContext,} from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom'





export function Login(){
    const [email,setEmail] =useState("")
    const [password, setPassword] = useState("")

    const {login,authdetails:{isLoggedIn}} = useContext(AuthContext)


async function hanldeClick(){
    try {
      let res =  await axios({
            method:"post",
            url:'https://reqres.in/api/login',
            data:{
                email,password
            }
        })

            
    login(res?.data.token)

    } catch (error) {
        console.log(error)
    }

}

if(isLoggedIn===true){
     return <Navigate to='/' />
    
}

    return(
        <Container maxW='600px'>
       <VStack spacing={6} >

        <Heading as="h1" size="xl">
            Login Page
        </Heading>

        <Input placeholder='Enter your Email' size='md' value={email}  onChange={(e)=>setEmail(e.target.value)} />
        <Input placeholder='Enter your password' size='md' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button colorScheme='red' variant='solid' onClick={hanldeClick} >
            Login
        </Button>
       </VStack> 
       </Container>
    )
}
