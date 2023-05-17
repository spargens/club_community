import { StyleSheet } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../components/clubLandingPage';
import Teams from '../components/teamsClub';
import Gallery from '../components/galleryClub';
import ImageViewer from '../components/clubImageViewer';

const Stack = createSharedElementStackNavigator();

export default function Club() {
    return (
        <NavigationContainer independent={true}>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="landingPage" component={LandingPage} />
                <Stack.Screen name="teams" component={Teams}
                    options={() => ({
                        gestureEnabled: true,
                        transitionSpec: {
                            open: { animation: "timing", config: { duration: 600 } },
                            close: { animation: "timing", config: { duration: 600 } },
                        }
                    })}
                />
                <Stack.Screen name="gallery" component={Gallery} />
                <Stack.Screen name="viewer" component={ImageViewer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
