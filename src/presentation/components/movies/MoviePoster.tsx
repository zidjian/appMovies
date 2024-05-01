import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export default function MoviePoster({ movie, height = 420, width = 300 }: Props) {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => navigator.navigate('Details', { movieId: Number(movie.id) })}
            style={({ pressed }) => ({
                height,
                width,
                opacity: pressed ? 0.9 : 1,
            })}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: movie.poster }} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 0,
    },
});
