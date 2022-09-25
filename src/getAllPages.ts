import fetchData from "./services/fetchData";
import { Character } from "./types/Character";
import { Episode } from "./types/Episode";
import { ApiResponse } from "./types/ApiResponse";

export default async function getAllPages (url: string) : Promise<(Episode | Character)[]>{
    
    let result: (Character | Episode)[] = [];
    let  nextPageDate: ApiResponse
    let nextUrl : string | null
    
    nextUrl = url;
    
    while(nextUrl !== null){
        nextPageDate = await fetchData(nextUrl);
        result=[...result,...nextPageDate.results];
        nextUrl = nextPageDate.info.next;
    }

    return result
}