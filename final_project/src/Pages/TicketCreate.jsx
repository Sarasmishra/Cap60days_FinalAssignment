import { Container,Input,Text ,Textarea,Select,VStack,Heading,Button} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"





export function TicketCreate(){
    const navigate = useNavigate()
    const[title,setTitle] = useState("")
    const [description,setDescription]= useState("")
    const [assignee,setAssignee] =useState("")
    const [priority,setPriority] = useState("")
    const [status,setStatus] = useState("")


        async function handleCreateTicket(){
            try {
                let newTicket = {
                    title,
                    description,
                    assignee,
                    priority,
                    status
                }
                
                let res = await axios({
                    method:"post",
                    url:"http://localhost:3000/tickets",
                    data:newTicket
                })
                

                if(res.status===201){
                    navigate("/tickets")
                }

            } catch (error) {
                console.log(error)
            }

        }

    
    return (
        <Container >
            <Heading>Create Ticket</Heading>
            <VStack spacing={6} margin={2}>
            <Input placeholder='Enter the Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <Textarea placeholder='Enter the description'  value={description} onChange={(e)=>setDescription(e.target.value)} />
            <Input placeholder='Enter the Assigne name' value={assignee} onChange={(e)=>setAssignee(e.target.value)} />
            <Select placeholder='Select Status' value={status} onChange={(e)=>setStatus(e.target.value)}>
  <option value='Pending'>Pending</option>
  <option value='Progress'>Progress</option>
  <option value='Completed'>Completed</option>
</Select>
<Select placeholder='Select Priority' value={priority} onChange={(e)=>setPriority(e.target.value)}>
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
<Button colorScheme='red' variant="outline" onClick={handleCreateTicket}>Submit Data</Button>
</VStack>
        </Container>
    )
}