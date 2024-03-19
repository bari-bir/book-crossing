import useApi from "../hooks/useApi";

export type favoriteInfo = {
    id: string,
    creator: string, 
    announcement: string
} 

interface IFavorite extends IResponse {
    data: favoriteInfo[],
} 

export function FavoriteApi(url: string) {
    const {res, fetchData} = useApi<IFavorite>(`bookcrossing/favorite/${url}`); 

    return {
        res, 
        fetchData,
    }
}