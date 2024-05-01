import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDB } from "../../../infrastructure/interfaces/moviedb.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export async function getMovieByIdUsecase(fetcher: HttpAdapter, movieId: number): Promise<FullMovie> {
    try {
        const movie = await fetcher.get<MovieDB>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie)

        return fullMovie;
    } catch (error) {
        throw new Error(`Error fetching movies - NowPlaying`);
    }
}