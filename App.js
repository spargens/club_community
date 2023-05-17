import { StyleSheet } from 'react-native';
import Landing from './screens/landing';
import Following from './screens/following';
import Community from './screens/community';
import Club from "./screens/club";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="following" component={Following} />
        <Stack.Screen name="community" component={Community} />
        <Stack.Screen name="club" component={Club} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
