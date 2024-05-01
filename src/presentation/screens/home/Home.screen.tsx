import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import PosterCaroucel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarrusel';
import { ScrollView } from 'react-native-gesture-handler';
import FullScreenLoader from '../../loaders/FullScreen.loader';

export default function HomeScreen() {
    const { loading, nowPlaying, upcoming, topRated, popular, popularNextPage } = useMovies();

    if (loading) {
        return <FullScreenLoader />;
    }

    return (
        <ScrollView>
            <View style={{ padding: 16 }}>
                <Text>Home</Text>
                {/* Principal */}
                <PosterCaroucel movies={nowPlaying} />

                {/* Populares */}
                <HorizontalCarousel title="Populares" movies={popular} loadNextPage={popularNextPage} />

                {/* Mejor calificadas */}
                <HorizontalCarousel title="Mejor calificadas" movies={topRated} />

                {/* Proximamente */}
                <HorizontalCarousel title="Proximamente" movies={upcoming} />
            </View>
        </ScrollView>
    );
}
