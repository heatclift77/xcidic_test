import axios from "axios"
const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

type Response = {
    count: number
    next: null
    previous: null
    results: any[]
}

export const getListPokemon = () => {
    return axios.get<Response>(url)
}

export const getDetail = (url: string) => {
    return axios.get(url)
}