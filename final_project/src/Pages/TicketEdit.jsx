import axios from "axios"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { LoadingIndicator } from "../components/LoadingIndicator"
import { ErrorIndicator } from "../components/ErrorIndicator"
import { Heading,Select,Button,Container ,VStack,Input,Textarea} from "@chakra-ui/react"

export function TicketEdit(){
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

            setLoading(false)
            setTicket(res?.data)

        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }




    useEffect(()=>{
        featchAndUpdateData(id)
    },[id])

    async function handleEdit(){
        try {
            let updatedTicket ={
                title:ticket.title,
                description:ticket.description,
                status:ticket.status,
                assignee:ticket.assignee,
                priority:ticket.priority
            }

            let res =await axios({
                method:"put",
                url:`http://localhost:3000/tickets/${id}`,
                data:updatedTicket
            })

            if(res.status===200){
                navigate('/tickets')
            }
        } catch (error) {
            console.log(error)
        }
    }
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
    return(
        <Container >
        <Heading>Create Ticket</Heading>
        <VStack spacing={6} margin={2}>
        <Input placeholder='Enter the Title' value={title} onChange={(e)=>setTicket({...ticket,title:e.target.value})} />
        <Textarea placeholder='Enter the description'  value={description} onChange={(e)=>setTicket({...ticket,description:e.target.value})} />
        <Input placeholder='Enter the Assigne name' value={assignee} onChange={(e)=>setTicket({...ticket,assignee:e.target.value})} />
        <Select placeholder='Select Status' value={status} onChange={(e)=>setTicket({...ticket,status:e.target.value})}>
<option value='Pending'>Pending</option>
<option value='Progress'>Progress</option>
<option value='Completed'>Completed</option>
</Select>
<Select placeholder='Select Priority' value={priority} onChange={(e)=>setTicket({...ticket,priority:e.target.value})}>
<option value='0'>0</option>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>

</Select>
<Button colorScheme='red' variant="outline" onClick={handleEdit}>Submit Data</Button>
</VStack>
    </Container>
    )
}