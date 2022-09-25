import { Info } from "./Info";
import { Episode } from "./Episode";
import { Character } from "./Character";

export interface ApiResponse {
    info : Info 
    results: Episode[] | Character[]
}