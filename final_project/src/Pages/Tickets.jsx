import {Box,Button,Container,Flex,Heading, 
    SimpleGrid,Select,
    filter
   } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { ErrorIndicator } from '../components/ErrorIndicator'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { TicketCard } from '../components/TicketCard'





export function Tickets(){
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [tickets,setTickets] = useState([])
    const [error,setError] = useState(false)
    const [sortOrderValue,setSortOrderValue] = useState("")
    const [filterValue,setFilterValue] = useState('')

    async function featchAndUpdateData(sortOrderValue,filterValue){
        setLoading(true)
        try {
          let queryParams = {}
          if(filterValue){
            queryParams.status_like = filterValue
          }

          if(sortOrderValue){
            queryParams._sort = 'priority'
            queryParams._order = sortOrderValue
          }
            let res = await axios({
                method:'get',
                url:`http://localhost:3000/tickets`,
                params:queryParams
            })

            let data  = res?.data
            setLoading(false)
            // console.log(data)
            setTickets(data)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(()=>{
        featchAndUpdateData(sortOrderValue,filterValue)
    },[sortOrderValue,filterValue])

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
    return(
       <Container maxW='container.xl'>
                <Heading as="h1" size="xl">
            Tickets Page
        </Heading>
        <Flex direction='row-reverse'>
            <Button variant='outline' colorScheme='red' onClick={()=>{navigate('/tickets/create')}}>
                Create Ticket
            </Button>
        </Flex>
        <Flex marginY={5} gap={2}>
        <Select  placeholder='Sort by Priority' value={sortOrderValue} onChange={(e)=>setSortOrderValue(e.target.value)}>
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
</Select>
<Select placeholder='Filter by Value' value={filterValue} onChange={(e)=>setFilterValue(e.target.value)}>
  <option value='pending'>Pending</option>
  <option value='progress'>Progress</option>
  <option value='completed'>Completed</option>
</Select>
        </Flex>
        
        <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={1}>
        {tickets.map(ticket=>(
          <TicketCard {...ticket} key={ticket.id}/>
        )

        )}
        </SimpleGrid>

       </Container> 
    )
}