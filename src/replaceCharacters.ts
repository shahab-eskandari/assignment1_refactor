import { Episode } from "./types/Episode";
import { Character } from "./types/Character";

export function replaceCharacters(episodes:Episode[] , allCharacters:Character[]){
    let characterUrlElements: string[] //for storing splitted URL(separating the last of each URL)

    episodes.forEach((episode:Episode, episodeIndex: number)=>{
        episode.characters.forEach((character:any, characterIndex: number)=>{
            characterUrlElements = character.split("/");
            //All the URLs have the same structure, the last element of array is what we want(the ID of each character)
            //Because characters stored in allCharacters object in order, we can use characterUrlElement[5]-1 as our desired index
            episodes[episodeIndex].characters[characterIndex] = allCharacters[+characterUrlElements[5]-1];
        })
    })

    return episodes
}