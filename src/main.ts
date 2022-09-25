import getAllPages from "./getAllPages";
import { replaceCharacters } from "./replaceCharacters";
import { Episode } from "./types/Episode";
import { Character } from "./types/Character";

//Getting all the episodes and store them in episode variable:
const episodes = await getAllPages('https://rickandmortyapi.com/api/episode') as Episode[] ;

//Getting all the character objects and store them in character variable:
const characters = await getAllPages('https://rickandmortyapi.com/api/character') as Character[];

//Replacing all the URLs for characters with corresponding character's objects without storing it in new variable:
console.log(replaceCharacters(episodes, characters));
