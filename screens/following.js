import { StyleSheet, View, Text, FlatList, Dimensions, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, following, suggestions } from "../constants/data";

const { width, height } = Dimensions.get("screen");
const SPACING = 12;

export default function Following({ navigation }) {

    function decideNavigation(type) {
        if (type === "Community") {
            navigation.navigate("community")
        }
        else if (type === "Club") {
            navigation.navigate("club")
        }
    }

    return (
        <SafeAreaView>
            <View>

                <ScrollView>
                    <Text style={styles.title}>You are part of...</Text>
                    {suggestions.map((item, index) => {
                        return (
                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.7 }]} key={index} onPress={() => { decideNavigation(item.type) }}>
                                <View style={styles.card}>
                                    <Image source={{ uri: item.url }} style={styles.image} />
                                    <View style={styles.data}>
                                        <View style={styles.name}>
                                            <View style={styles.textBox}><Text style={styles.text}>{item.name}</Text></View>
                                            <View style={styles.textBox}><Text style={styles.text} numberOfLines={1}>{item.tag}</Text></View>
                                            <View style={styles.textBox}><Text style={styles.textSub}> Started following{item.time}</Text></View>
                                        </View>
                                        <View style={styles.button}>
                                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.buttonContainer]}>
                                                <Text style={styles.buttonText}>Unfollow</Text>
                                            </Pressable>
                                            <View><Text style={[styles.textSub, { marginTop: 3 }]}>{item.type}</Text></View>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    })}
                    <Text style={[styles.title, { marginTop: 22 }]}>Suggestion for you...</Text>
                    {following.map((item, index) => {
                        return (
                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.7 }]} key={index}>
                                <View style={styles.card} >
                                    <Image source={{ uri: item.url }} style={styles.image} />
                                    <View style={styles.data}>
                                        <View style={styles.name}>
                                            <View style={styles.textBox}><Text style={styles.text}>{item.name}</Text></View>
                                            <View style={styles.textBox}><Text style={styles.text} numberOfLines={1}>{item.tag}</Text></View>
                                            <View style={styles.textBox}><Text style={styles.textSub}> Started following{item.time}</Text></View>
                                        </View>
                                        <View style={styles.button}>
                                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.buttonContainer]}>
                                                <Text style={styles.buttonText}>Follow</Text>
                                            </Pressable>
                                            <View><Text style={[styles.textSub, { marginTop: 3 }]}>{item.type}</Text></View>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    textSub: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#747574"
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.text
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    },
    buttonContainer: {
        // borderWidth: 0.5,
        width: "100%",
        height: 36,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.buttonBG
    },
    textBox: {
        // borderWidth: 0.5,
        width: "80%",
        height: "30%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        // borderWidth: 0.5,
        height: "100%",
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        // borderWidth: 0.5,
        height: "100%",
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    data: {
        // borderWidth: 0.5,
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    card: {
        width: width - 2 * SPACING,
        height: 80,
        borderWidth: 0.5,
        borderColor: colors.text,
        marginLeft: SPACING,
        marginTop: 20,
        borderRadius: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        marginLeft: 6,
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 6,
        color: colors.text
    }
});