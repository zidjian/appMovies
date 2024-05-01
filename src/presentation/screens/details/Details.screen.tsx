import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import useMovie from '../../hooks/useMovie';
import MovieHeader from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import FullScreenLoader from '../../loaders/FullScreen.loader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function DetailsScreen({ route }: Props) {
    const { movieId } = route.params;
    const { loading, movie, cast } = useMovie(movieId);

    if (loading) {
        return <FullScreenLoader />;
    }

    return (
        <ScrollView>
            <MovieHeader title={movie!.title} poster={movie!.poster} originalTitle={movie!.originlaTitle} />
            <MovieDetails movie={movie!} cast={cast!}  />
        </ScrollView>
    );
}
