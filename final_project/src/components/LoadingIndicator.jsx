
import { CircularProgress,CircularProgressLabel } from "@chakra-ui/react"
export function LoadingIndicator(){
    return (
      <CircularProgress isIndeterminate color='blue.300' thickness='5px' />
    )
  }