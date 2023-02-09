import { Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import './App.css'

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results || []))
  }, []);
  console.log(pokemonList);

  return (
    <Flex direction='column' >
      <Center w='full' bg="#F0F1F6" fontSize='20px' fontWeight='bold' p='20px'>
        <Text color='#6495ED' pr='5px'>Form</Text>
        <Text>Fetch Api</Text>
      </Center>
      <Center p='20px' w='full' h='full' bg='#FBFBFA'>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }} gap={10} w='full' >
          {pokemonList
            .map((item, i) => (
              <Flex direction='column' alignItems='center'>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />
                {item.name}
              </Flex>
            ))}
        </Grid>
      </Center>
    </Flex>

  );
}