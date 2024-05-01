import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCase from '../../core/usecases';
import { useState } from 'react';

let popularPageNumber = 1;

export function useMovies() {
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [upcoming, setUncoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);

    useState(() => {
        initialLoad();
    });

    async function initialLoad() {
        const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] = await Promise.all([
            UseCase.moviesNowPlayingUsecase(movieDBFetcher),
            UseCase.moviesUpcomingUsecase(movieDBFetcher),
            UseCase.moviesTopRatedUsecase(movieDBFetcher),
            UseCase.moviesPopularUsecase(movieDBFetcher),
        ]);

        setNowPlaying(nowPlayingMovies);
        setUncoming(upcomingMovies);
        setTopRated(topRatedMovies);
        setPopular(popularMovies);

        setLoading(false);
    }

    return {
        loading,
        nowPlaying,
        upcoming,
        topRated,
        popular,

        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCase.moviesPopularUsecase(movieDBFetcher, {
                page: popularPageNumber,
            });

            setPopular((prev) => [...prev, ...popularMovies]);
        },
    };
}
