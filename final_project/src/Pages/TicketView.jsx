import axios from "axios"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { LoadingIndicator } from "../components/LoadingIndicator"
import { ErrorIndicator } from "../components/ErrorIndicator"
import { Card,CardBody,CardHeader,CardFooter,Heading,Text,Box,Stack,Button,StackDivider,Container,HStack } from "@chakra-ui/react"

export function TicketView(){
    const [ticket,setTicket] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const{id} = useParams()
    const navigate = useNavigate()

    async function featchAndUpdateData(id){
        setLoading(true)
        try {
            let res = await axios({
                method:'get',
                url:`http://localhost:3000/tickets/${id}`,
            })

            // let data  = res?.data
            setLoading(false)
            setTicket(res?.data)
            // setTicket(data)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    async function handleDelete(){
        try {
            let res = await axios({
                method:'delete',
                url:`http://localhost:3000/tickets/${id}`,
            })

            console.log(res)

            if(res.status===200){
                navigate('/tickets')
            }
        } catch (error) {
            console.log(error)
        }

        
    }


    useEffect(()=>{
        featchAndUpdateData(id)
    },[id])

    if(loading){
      return (
        <LoadingIndicator/>
      )
    } 
    if(error){
      return(
        <ErrorIndicator/>
    )
    }

    const {title,description,status,assignee,priority}= ticket
        return (
        <>
        <Heading marginY={5}  textAlign='center'>View Ticket</Heading>
        <Container>
        <Card>
    <CardHeader>
      <Heading size='md'>{title}</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Status 
          </Heading>
          <Text pt='2' fontSize='sm'>
            {status}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Priority
          </Heading>
          <Text pt='2' fontSize='sm'>
            {priority}
          </Text>
        </Box>

        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Description
          </Heading>
          <Text pt='2' fontSize='sm'>
            {description}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Assignee
          </Heading>
          <Text pt='2' fontSize='sm'>
            {assignee}
          </Text>
        </Box>
      </Stack>
    </CardBody>
    <CardFooter>
        <HStack>
        <Button variant='outline' colorScheme='red' marginX={4}  onClick={()=>navigate(`/tickets/edit/${id}`)} >
          Edit Ticket
        </Button>
        <Button variant='outline' colorScheme='red' onClick={()=>handleDelete()} >
          Delete Ticket
        </Button>
        </HStack>
      </CardFooter>
  </Card>
  </Container>

        </>
    )
}
