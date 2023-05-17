import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get("screen");
import * as Animatable from "react-native-animatable";
import { colorsClub } from "../constants/data";


const right = {
    0: { opacity: 0, translateX: 50 },
    1: { opacity: 1, translateX: 0 }
}

export default function UpperData() {
    return (
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
                <Animatable.View
                    style={[styles.person]}
                    animation={right}
                    delay={400}
                    useNativeDriver
                >
                    <Octicons name="person-fill" size={20} color="white" />
                    <Text style={styles.headerText}>531</Text>
                </Animatable.View>
                <Animatable.View
                    style={[styles.person]}
                    animation={right}
                    delay={400}
                    useNativeDriver
                >
                    <AntDesign name="heart" size={20} color="red" />
                    <Text style={styles.headerText}>531</Text>
                </Animatable.View>
                <Animatable.View
                    style={[styles.person]}
                    animation={right}
                    delay={400}
                    useNativeDriver
                >
                    <Ionicons name="notifications" size={20} color="white" />
                    <Text style={styles.headerText}>3</Text>
                </Animatable.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperContainer: {
        position: "absolute",
        zIndex: 10,
        height: height,
        width: width
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    person: {
        marginTop: height / 14,
        marginRight: 12,
        height: 40,
        width: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        color: colorsClub.mainText
    }
});