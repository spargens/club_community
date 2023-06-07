import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text, Image, Pressable, Animated } from "react-native";
import { colorsCommunity, cover, data, communityData } from "../constants/data";
import { MaterialIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
import SimilarCommunity from "./similarCommunity";
import AddButton from "./addButton";
import { SharedElement } from "react-navigation-shared-element";
import CommunityHomePin from "./communityHomePin";


const { width, height } = Dimensions.get("screen");

export default function Scroll({ navigation }) {
    const scrollY = React.useRef(new Animated.Value(0)).current;


    const opacity = scrollY.interpolate({
        inputRange: [-height * 0.3, 0, height * 0.3],
        outputRange: [1, 1, 0]
    });

    const reverseOpacity = scrollY.interpolate({
        inputRange: [-height * 0.3, 0, height * 0.3],
        outputRange: [0, 0, 1]
    });

    function handleCreateContent() {
        navigation.navigate("createContent");
    }

    return (
        <>
            <Animated.View style={{ flex: 1, zIndex: -10, opacity }}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/blackHole.jpeg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                </View>
            </Animated.View>
            <Animated.View style={[styles.tab, { opacity: reverseOpacity }]}>
                <Image source={cover.main} style={styles.tabBackground} blurRadius={10} />
                <View style={styles.tabUpperLayer}>
                    <View><Text style={[styles.tabTitle]}>{cover.title}</Text></View>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.tabButton]} onPress={() => { navigation.navigate("contribution"); }}>
                        <Text style={styles.tabButtonText}>Join</Text>
                    </Pressable>
                </View>
            </Animated.View>
            <Animated.ScrollView
                style={styles.scrollContainer}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
            >
                <SharedElement id={`coverPhoto`}>
                    <View style={styles.coverBox}>
                        <Image source={cover.secondary} style={styles.image} />
                    </View>
                </SharedElement>
                <View style={{ flexDirection: "row" }}>
                    <SharedElement id={`title`}>
                        <View style={{ flexDirection: "row", width: 300 }}>
                            <Text style={styles.title}>{cover.title}</Text>
                            <MaterialIcons name="verified" size={20} color="#1ea1ed" />
                        </View>
                    </SharedElement>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.joinButton]} onPress={() => { navigation.navigate("contribution"); }}>
                        <Text style={styles.buttonText}>Join</Text>
                    </Pressable>
                </View>
                <View style={styles.labelContainer}><Text style={styles.label}>{cover.label}</Text></View>
                <View style={styles.subLabelContainer}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text style={styles.label}>{cover.created}</Text>
                </View>
                <View style={[styles.subLabelContainer, { marginTop: 6 }]}>
                    <Ionicons name="ios-stats-chart-outline" size={16} color="black" style={{ marginLeft: 4 }} />
                    <Text style={styles.number}>{cover.member}  members</Text>
                </View>
                <View style={styles.separator}></View>
                <SimilarCommunity />
                <View>
                    {communityData.map((item, index) => {
                        return (
                            <CommunityHomePin data={item} key={index} />
                        )
                    })}
                </View>
            </Animated.ScrollView>
            <AddButton onPress={handleCreateContent} />
        </>
    )
};

const styles = StyleSheet.create({
    tabButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22
    },
    tabButton: {
        width: 100,
        height: 40,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 0.5,
        marginBottom: 6
    },
    tabTitle: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    },
    tabUpperLayer: {
        zIndex: 20,
        top: 0,
        height: 110,
        width: width,
        position: "absolute",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 6,
        paddingBottom: 4
    },
    tabBackground: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    tab: {
        position: "absolute",
        top: 0,
        height: 110,
        width: width,
        zIndex: 10,
    },
    imageContainer: {
        width: width,
        height: height * 0.35,
    },
    sender: {
        borderWidth: 0.5,
        height: "100%",
        width: "15%"
    },
    contentContainer: {
        borderWidth: 0.5,
        height: "100%",
        width: "85%"
    },
    container: {
        borderWidth: 0.5,
        marginTop: 12,
        width: width,
        flexDirection: "row"
    },
    separator: {
        borderWidth: 0.3,
        borderColor: "#bab8b8",
        marginTop: 12
    },
    number: {
        fontWeight: "bold",
        textAlign: "center",
        color: colorsCommunity.label,
        paddingHorizontal: 6,
    },
    subLabelContainer: {
        marginTop: 22,
        marginLeft: 6,
        flexDirection: "row"
    },
    label: {
        fontWeight: "bold",
        textAlign: "center",
        color: colorsCommunity.label,
        paddingHorizontal: 6,
        letterSpacing: 0.9,
        lineHeight: 18
    },
    labelContainer: {
        marginTop: 12,
        paddingHorizontal: 6
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18
    },
    joinButton: {
        borderWidth: 0.8,
        position: "absolute",
        right: 12,
        height: 40,
        top: 6,
        width: 100,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 12
    },
    coverBox: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginTop: height * 0.225,
        marginLeft: 6
    },
    title: {
        fontWeight: "bold",
        color: colorsCommunity.title,
        fontSize: 40,
        marginLeft: 6
    },
    scrollContainer: {
        zIndex: 0,
        flex: 1,
        position: "absolute",
        width: width,
        height: height,
        top: 60
    },
});