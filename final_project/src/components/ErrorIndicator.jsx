import { Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,}from  "@chakra-ui/react"

    
export function ErrorIndicator(){
    return(
      <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Error!</AlertTitle>
    <AlertDescription>Something went wrong.</AlertDescription>
  </Alert>
    )
  }