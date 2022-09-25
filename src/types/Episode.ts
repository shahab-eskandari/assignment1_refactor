import { Character } from "./Character"

export interface Episode {
    id:	number	
    name: string
    air_date: string
    episode: string
    characters: (string | Character)[]
    url: string 
    created: string
}