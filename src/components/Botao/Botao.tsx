import { Button } from "@chakra-ui/react"
import { welcome } from "../../services/welcome"

export const Botao = () =>{
    return(
        <Button onClick={welcome} width='30%' marginTop='5px' backgroundColor={"lightblue"}>LOGAR</Button>
    )
} 