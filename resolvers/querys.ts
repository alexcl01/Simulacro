import { GraphQLError } from "graphql";
import { CharacterAPIRest } from "../types.ts";

export const Query = {
  character: async (
    _: unknown,
    args: { id: string }
  ): Promise<CharacterAPIRest> => {
    const { id } = args;
    const character = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    if(character.status !== 200){
      throw new GraphQLError("Error");
    }
    const response = await character.json();
    return response;

  },
  charactersByIds: async (
    _: unknown,
    args: { ids: string[] }
  ): Promise<Array<CharacterAPIRest>> => {
    const { ids } = args;
    const characters = await fetch(`https://rickandmortyapi.com/api/character/${ids.toString()}`);
    return characters.json();
  },
};