import { useLoaderData, LoaderFunction } from 'remix';
import {
  Box,
} from '@chakra-ui/react';
import { PokemonDescriptionCard } from '../../components/Card';

type Data = {
  name: string;
  url: string;
  type: string[];
  height: number;
  ability: string[];
  baseExperience: number;
}

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const response: any = await fetch(url);
  const data = await response.json();
  return {
    name: data?.name,
    url: data?.sprites?.front_default,
    type: data?.types.map((item: any) => item.type.name),
    height: Number(data?.height) / 10,
    ability: data?.abilities.map((item: any) => item.ability.name),
    baseExperience: data?.base_experience,
  };
};

const Index = () => {
  const data = useLoaderData<Data>();

  return (
    <Box position="fixed" right="40px">
      <PokemonDescriptionCard {...data} navigatePath="/pokemon" />
    </Box>
  );
};

export default Index;
