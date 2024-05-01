import { View, Text, ScrollView } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export default function PosterCaroucel({ movies }: Props) {
    return (
        <ScrollView
            contentContainerStyle={{
                gap: 16,
            }}
            style={{
                overflow: 'visible',
            }}
            horizontal
            showsHorizontalScrollIndicator={true}
        >
            {movies.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} />
            ))}
        </ScrollView>
    );
}
