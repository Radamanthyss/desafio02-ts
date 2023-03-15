import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Botao } from './Botao/Botao';
import { Header } from './Header/Header';

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Header />
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Botao />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}