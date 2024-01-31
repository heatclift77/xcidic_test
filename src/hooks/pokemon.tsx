import { useQuery } from "@tanstack/react-query"
import { getListPokemon } from "@/services/pokemon"

export const useGetPokemons = (params?: any) => {
    return useQuery({
        queryKey: ["pokemon"],
        queryFn: () => getListPokemon()
    })
}