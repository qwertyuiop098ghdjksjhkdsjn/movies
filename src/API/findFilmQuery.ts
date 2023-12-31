import { error } from "console"
import { SearchResultObject } from "../types";
import { VideoResponse } from "../types";

const baseURL = "https://kinopoiskapiunofficial.tech/api/v2.1"

const URL = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="

export function findFilm (input: string, page: number): Promise <SearchResultObject> {
    return fetch(URL + input + "&page=" + page, {
        method: 'GET',
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }}).then((res) => res.json()).catch((error) => console.log(error));
}


export function findOneFilmInfo (filmID: string) {
    return fetch (baseURL + "/films/" + filmID, {
        method: 'GET',
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }}).then((res) => res.json()).catch((error) => console.log(error));
}

const URL_genre = "https://kinopoiskapiunofficial.tech/api/v2.2/films/filters"

export function findGenre () {
    return fetch(URL_genre , {
        method: 'GET',
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json()).catch((error) => console.log(error));
}

const URL_find_genre = "https://kinopoiskapiunofficial.tech/api/v2.2/films"

export function findFilmGenre (genre_id: string, page: number) {
    return fetch (URL_find_genre + "?genres=" + genre_id + "&page=" + page, {
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json()).catch((error) => console.log(error));
    }

//images

const imageURL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/"

export function getPictures (id: string) {
    return fetch (imageURL + id + "/images?type=STILL&page=1", {
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json()).catch((error) => console.log(error))
}


//video

export function getVideo (id: string): Promise <VideoResponse> {
    return fetch (imageURL + id + "/videos", {
        headers: {
            'X-API-KEY': '2741155f-8083-4fdd-a48c-cb2c7f541ec8',
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json()).catch((error) => console.log(error))
}