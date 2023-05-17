import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Dimensions, Platform, Pressable } from 'react-native';
import UpperData from "../components/upperData";
import { profile, colorsClub, clubHeader, homePage } from "../constants/data";

import { SharedElement } from "react-navigation-shared-element";
import ClubHomePin from "./clubHomePin";


const url = "https://images.pexels.com/photos/5487952/pexels-photo-5487952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const { width, height } = Dimensions.get("screen");
const itemHeight = 280;
const itemWidth = 80;
const inputRange = [-itemWidth, 0, itemWidth];

export default function LandingPage({ navigation }) {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [upperContent, setUpperContent] = useState(scrollY);
    const [dataVisible, setDataVisible] = useState(false);
    useEffect(() => {
        if (upperContent > 40) {
            setDataVisible(true)
        }
        else {
            setDataVisible(false)
        }
    }, [upperContent])
    const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 0.8]
    });
    const titleOpacity = scrollY.interpolate({
        inputRange: [-80, 0, 40],
        outputRange: [1, 1, 0]
    });
    const blurImage = scrollY.interpolate({
        inputRange,
        outputRange: [0, 0, 1]
    });

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Animated.Image source={{ uri: url }} style={[styles.image, { opacity }]} />
            <View style={styles.bottomContainer}>
            </View>
            <Animated.View style={[styles.blurredImage, { opacity: blurImage }]}>
                <Image source={{ uri: url }} style={[StyleSheet.absoluteFillObject]} blurRadius={5} />
            </Animated.View>
            <Animated.View style={[styles.upperContainer, { opacity: blurImage }]}>
                <View>
                    <Text style={[styles.title, { marginTop: height / 18 }]}>{clubHeader.title}</Text>
                </View>
                <View style={styles.mottoContainer}>
                    <Text style={styles.mottoText}>{clubHeader.motto}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]} onPress={() => { navigation.navigate("gallery") }}><View style={[Platform.OS === "ios" ? [styles.button, { backgroundColor: colorsClub.backgroundColor }] : [styles.button, { backgroundColor: colorsClub.androidColor }]]}><Text style={styles.buttonText}>Gallery</Text></View></Pressable>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]}><View style={[Platform.OS === "ios" ? [styles.button, { backgroundColor: colorsClub.backgroundColor }] : [styles.button, { backgroundColor: colorsClub.androidColor }]]}><Text style={styles.buttonText}>Events</Text></View></Pressable>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]}><View style={[Platform.OS === "ios" ? [styles.button, { backgroundColor: colorsClub.backgroundColor }] : [styles.button, { backgroundColor: colorsClub.androidColor }]]}><Text style={styles.buttonText}>Join Us!</Text></View></Pressable>
                </View>
            </Animated.View>
            {dataVisible && <UpperData />}
            <Animated.ScrollView
                style={styles.scrollView}
                bounces={false}
                bouncesZoom={false}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                onMomentumScrollBegin={(ev) => { setUpperContent(ev.nativeEvent.contentOffset.y); }}
                onMomentumScrollEnd={(ev) => { setUpperContent(ev.nativeEvent.contentOffset.y); }}
                onScrollBeginDrag={(ev) => { setUpperContent(ev.nativeEvent.contentOffset.y); }}
                onScrollEndDrag={(ev) => { setUpperContent(ev.nativeEvent.contentOffset.y); }}
            >
                <View style={styles.scrollViewTop}>
                    <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>Sheyn</Animated.Text>
                    <SharedElement id="secretId">
                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.8 }]} onPress={() => { navigation.navigate("teams") }}>
                            <Animated.View style={[styles.team, { opacity: titleOpacity }]} >
                                {profile.map((item, index) => {
                                    return (
                                        <SharedElement id={`team-image-${index}`} key={index}>
                                            <Image
                                                key={index}
                                                source={{ uri: item.image }}
                                                style={[
                                                    styles.avatar,
                                                    {
                                                        zIndex: 99 + profile.length - index,
                                                        marginLeft: index === 0 ? 0 : -20,
                                                    }
                                                ]}
                                            />
                                        </SharedElement>
                                    )
                                })}
                            </Animated.View>
                        </Pressable>
                    </SharedElement>
                </View>
                {homePage.map((item, index) => {
                    return (
                        <ClubHomePin data={item} dark={false} />
                    )

                })}
            </Animated.ScrollView >
        </View >
    )
}



const styles = StyleSheet.create({
    mottoText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        letterSpacing: 1.1,
        lineHeight: 20
    },
    mottoContainer: {
        // borderWidth: 0.5,
        height: height * 0.1,
        width: "100%",
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    },
    button: {
        // borderWidth: 0.5,
        width: width / 3.6,
        height: height * 0.05,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: colors.backgroundColor,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowOffset: { width: 8, height: 6 },
    },
    buttonContainer: {
        // borderWidth: 0.5,
        width: width,
        height: 60,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    team: {
        // borderWidth: 0.5,
        width: 200,
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollViewTop: {
        // borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18
    },
    upperContainer: {
        position: "absolute",
        zIndex: 20,
        // borderWidth: 0.5,
        height: height,
        width: width,
        // borderWidth: 0.5
    },
    blurredImage: {
        position: "absolute",
        zIndex: 0,
        height: height,
        width: width
    },
    title: {
        fontWeight: "bold",
        fontSize: 48,
        marginLeft: 18,
        color: colorsClub.mainText

    },
    scrollView: {
        // borderWidth: 0.5,
        position: "absolute",
        width: width,
        height: height - 300,
        bottom: 0,
        backgroundColor: "transparent",
        zIndex: 99,
    },
    bottomContainer: {
        width: width,
        height: height - 300,
        zIndex: -99,
        backgroundColor: colorsClub.backgroundColor
    },
    image: {
        flex: 1,
        width: width,
        height: 300,
        resizeMode: "cover",
        zIndex: -99
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});