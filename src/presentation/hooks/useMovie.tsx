import { useEffect, useState } from 'react';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCase from '../../core/usecases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';

export default function useMovie(movieId: number) {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    async function loadMovie() {
        setLoading(true);

        const FullMovieQuery = UseCase.getMovieByIdUsecase(movieDBFetcher, movieId);

        const CastQuery = UseCase.getMovieCastUseCase(movieDBFetcher, movieId);

        const [fullMovie, cast] = await Promise.all([FullMovieQuery, CastQuery]);

        setMovie(fullMovie);
        setCast(cast);
        setLoading(false);
    }

    return {
        loading,
        movie,
        cast,
        loadMovie,
    };
}
