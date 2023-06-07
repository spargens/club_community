import { StyleSheet, View, Text, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import CommunityCreate from "../components/communityCreate";
import ClubCreate from "../components/clubCreate";

const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get("screen");
const SPACING = (width - 300) / 3;

export default function Creation() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        width: 300,
                        // borderWidth: 0.5,
                        left: width / 2 - 155,
                        backfaceVisibility: false,
                        backgroundColor: "transparent"
                    },
                    tabBarLabelStyle: { fontWeight: "bold", fontSize: 16 },
                    tabBarGap: 50,
                    tabBarContentContainerStyle: { backgroundColor: "transparent" },
                    tabBarIndicatorStyle: { backgroundColor: "black", width: 80, marginLeft: 34, height: 4, borderRadius: 12 }
                }}
            >
                <Tab.Screen name="community" component={CommunityCreate} />
                <Tab.Screen name="club" component={ClubCreate} />
            </Tab.Navigator>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({});