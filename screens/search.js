import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, searchIcon } from "../constants/data";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from '@expo/vector-icons';

const SPACING = 12;
const { width, height } = Dimensions.get("screen");
const animation = {
    0: { opacity: 0, translateY: -200 },
    1: { opacity: 1, translateY: 0 }
};
const searchResult = "https://images.pexels.com/photos/319930/pexels-photo-319930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Search({ navigation }) {
    const [query, setQuery] = React.useState(null);
    return (
        <SafeAreaView>
            <Text style={styles.title}>Search</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    placeholder="Clubs,communities or your interest"
                    style={styles.queryInput}
                    onChangeText={(e) => setQuery(e)}
                />
                <Pressable style={({ pressed }) => [styles.searchButton, pressed && { opacity: 0.5 }]} onPress={() => navigation.navigate("searchResult", { title: query, url: searchResult, search: true })}>
                    <FontAwesome name="search" size={20} color={colors.text} style={{ marginRight: 12 }} />
                </Pressable>
            </View>
            <Text style={[styles.title, { fontSize: 18, marginTop: SPACING * 1.2 }]}>Browse all</Text>
            <FlatList
                data={searchIcon}
                keyExtractor={(_, index) => index}
                contentContainerStyle={{ marginTop: SPACING, display: "flex", alignItems: "center", justifyContent: "center" }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.9 }]} onPress={() => { navigation.navigate("searchResult", { title: item.name, url: item.url, search: false }) }}>
                            <Animatable.View
                                style={[styles.card, { backgroundColor: item.color }]}
                                animation={animation}
                                delay={100 + index * 140}
                                useNativeDriver
                            >
                                <View style={styles.iconText}>
                                    <Text style={styles.queryText}>{item.name}</Text>
                                </View>
                                <View style={styles.iconImage}>
                                    <Image
                                        source={{ uri: item.url }}
                                        style={{ height: 90, width: 90, borderRadius: 45, resizeMode: "cover" }}
                                    />
                                </View>
                            </Animatable.View>
                        </Pressable>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchButton: {
        position: "absolute",
        left: width - 4 * SPACING,
        top: 20, zIndex: 10
    },
    queryText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22
    },
    iconText: {
        // borderWidth: 0.5,
        height: "30%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: SPACING,
        overflow: "hidden"
    },
    iconImage: {
        // borderWidth: 0.5,
        height: "70%",
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        paddingRight: SPACING
    },
    card: {
        width: width / 2 - 2 * SPACING,
        height: 150,
        marginHorizontal: SPACING,
        marginVertical: SPACING,
        borderRadius: SPACING,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    queryInput: {
        borderWidth: 0.5,
        width: width - 2 * SPACING,
        marginLeft: SPACING,
        height: 40,
        marginTop: SPACING,
        borderRadius: SPACING,
        paddingLeft: SPACING
    },
    title: {
        marginLeft: 12,
        fontWeight: "bold",
        fontSize: 38,
        marginTop: 6,
        color: colors.text
    }
});