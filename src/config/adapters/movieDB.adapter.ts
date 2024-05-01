import { API_MOVIE_DB } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: API_MOVIE_DB ?? 'no-api',
        languages: 'es'
    }
})