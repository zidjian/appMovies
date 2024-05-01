import { View, Text, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
    title?: string;
    movies: Movie[];
    loadNextPage?: () => void;
}

export default function HorizontalCarousel({ title, movies, loadNextPage }: Props) {
    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEnd = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

        if (!isEnd) return;

        isLoading.current = true;

        loadNextPage && loadNextPage();
    }

    return (
        <View>
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster key={item.id} movie={item} height={200} width={140} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    gap: 16,
                }}
                style={{
                    overflow: 'visible',
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 32,
    },
});
