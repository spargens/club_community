import { StyleSheet, View, Text, FlatList, Image, Pressable } from "react-native";
import { suggestionCommunity, colorsCommunity } from "../constants/data";

export default function SimilarCommunity() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Communities for you...</Text>
            <FlatList
                data={suggestionCommunity}
                keyExtractor={(_, index) => index}
                contentContainerStyle={{ padding: 12 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]}>
                            <View style={styles.card}>
                                <Image source={{ uri: item.url }} style={{ height: 80, width: 80, borderRadius: 40, resizeMode: "cover" }} />
                                <Text style={styles.subtitle}>{item.name}</Text>
                            </View>
                        </Pressable>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: "bold",
        marginTop: 8,
    },
    card: {
        height: 200,
        width: 125,
        borderRadius: 22,
        borderWidth: 0.5,
        borderColor: "#bab8b8",
        marginHorizontal: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        paddingLeft: 12,
        fontSize: 22,
        color: colorsCommunity.label
    },
    container: {
        // borderWidth: 0.5,
        marginTop: 18
    }
});