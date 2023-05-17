import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { bg } from "../constants/data";

const { width, height } = Dimensions.get("screen");

export default function VideoViewer() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.blurredImage}>
                <Image source={{ uri: bg }} style={{ width: "100%", height: "100%", resizeMode: "cover" }} blurRadius={5} />
            </View>
            <Text>Video viewer</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    blurredImage: {
        width: width,
        height: height
    }
});