import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Navigation from './presentation/navigation/Navigation';

export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}
