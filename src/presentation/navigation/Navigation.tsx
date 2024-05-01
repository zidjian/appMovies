import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home.screen';
import DetailsScreen from '../screens/details/Details.screen';

export type RootStackParams = {
    Home: undefined;
    Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export default function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
