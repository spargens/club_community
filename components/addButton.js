import { StyleSheet, Pressable, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("screen");

const animation = {
    0: { translateX: 50 },
    1: { translateX: 0 }
}

export default function AddButton({ onPress }) {
    return (
        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.container]} onPress={onPress}>
            <Animatable.View
                animation={animation}
                delay={600}
                useNativeDriver
            >
                <Ionicons name="ios-add-circle" size={50} color="#1ea1ed" />
            </Animatable.View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: height - 80,
        right: 12,
        height: 60,
        width: 60,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});