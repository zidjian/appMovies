import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from '../../../infrastructure/interfaces/moviedb.responses';
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export async function moviesUpcomingUsecase(fetcher: HttpAdapter): Promise<Movie[]> {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/upcoming');

        return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        throw new Error(`Error fetching movies - Upcoming`);
    }
}