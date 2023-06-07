import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Scroll from '../components/scroll';
import CreateContent from '../components/createContent';
import Contribution from '../components/contribution';

const Stack = createSharedElementStackNavigator();

export default function Community() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='landing' component={Scroll} />
                <Stack.Screen name='contribution' component={Contribution} />
                <Stack.Screen name='createContent' component={CreateContent}
                    options={() => ({
                        gestureEnabled: true,
                        transitionSpec: {
                            open: { animation: "timing", config: { duration: 600 } },
                            close: { animation: "timing", config: { duration: 600 } },
                        }
                    })}
                />
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
