import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from '../../../infrastructure/interfaces/moviedb.responses';
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number,
    limit?: number
}

export async function moviesPopularUsecase(fetcher: HttpAdapter, options?: Options): Promise<Movie[]> {
    try {
        console.log(options?.page);
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });

        return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        throw new Error(`Error fetching movies - Popular`);
    }
}