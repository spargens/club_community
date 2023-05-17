import { Dimensions, StyleSheet, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ImageViewer from "./clubImageViewer";
import VideoViewer from "./clubVideoViewer";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const url = "https://images.pexels.com/photos/5487952/pexels-photo-5487952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


const Tab = createMaterialTopTabNavigator();


export default function Gallery({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.blurredImage}>
                <Image source={{ uri: url }} style={[StyleSheet.absoluteFillObject]} blurRadius={5} />
            </View>
            <SafeAreaView style={{ flex: 1, zIndex: 10, borderWidth: 0.5 }}>
                <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "transparent" } }}>
                    <Tab.Screen name="Image" component={ImageViewer} />
                    <Tab.Screen name="Watch" component={VideoViewer} />
                </Tab.Navigator>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    blurredImage: {
        position: "absolute",
        zIndex: 0,
        height: height,
        width: width
    }
})

