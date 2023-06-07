import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, FlatList, Pressable } from "react-native";
import { suggestions, colors } from "../constants/data";
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("screen");
const SPACING = 12;

const animation = {
    0: { opacity: 0, translateX: -200 },
    1: { opacity: 1, translateX: 0 }
};

const notFound = {
    0: { opacity: 0, scale: 0 },
    1: { opacity: 1, scale: 1 }
};

const opacity = {
    0: { opacity: 0 },
    1: { opacity: 1 }
};

const SearchTab = ({ title, result }) => {
    return (
        <View style={styles.searchTab}><Text style={styles.result}>{`For ${title} found ${result} results...`}</Text></View>
    )
};

const Loader = ({ title }) => {
    return (
        <View style={styles.loaderContainer}>
            <LottieView source={require("../assets/141572-space-boy-developer.json")} autoPlay loop style={[{ width: 260, height: 260 }]} />
            <Text style={styles.result}>{`Looking for ${title}...`}</Text>
        </View>
    )
};

const getRightContent = (search, loadingResult, title, result, resultOutput, navigation) => {
    if (loadingResult) {
        return <Loader title={title} />
    }
    else if (search && !loadingResult) {
        if (resultOutput) {
            return (
                <>
                    <SearchTab title={title} result={4} />
                    <FlatList
                        data={resultOutput}
                        keyExtractor={(_, index) => index}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: SPACING }}
                        renderItem={({ item, index }) => {
                            return (
                                <Animatable.View
                                    style={styles.card}
                                    animation={animation}
                                    delay={200 + index * 200}
                                    useNativeDriver
                                >
                                    <View style={styles.top}>
                                        <View style={styles.image}>
                                            <View style={styles.shadow}>
                                                <Image
                                                    source={{ uri: item.url }}
                                                    style={styles.actualImg}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.data}>
                                            <Text style={styles.info1}>{item.name}</Text>
                                            <View style={{ flexDirection: "row" }}>
                                                <FontAwesome name="hashtag" size={14} color={colors.text} style={{ marginTop: 7, marginRight: 6, opacity: 0.7 }} />
                                                <Text style={styles.info}>{item.tag}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <AntDesign name="star" size={18} color={colors.text} style={{ marginTop: 4, marginRight: 6, opacity: 0.7 }} />
                                                <Text style={styles.info}>{item.type}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <MaterialIcons name="group" size={20} color={colors.text} style={{ marginTop: 4, marginRight: 6, opacity: 0.7 }} />
                                                <Text style={styles.info}>{item.activeMembers} members</Text>
                                            </View>
                                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.visit]}>
                                                <Text style={styles.visitText}>Visit</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={styles.bottom}>
                                        <Text style={styles.motto}>"{item.motto}"</Text>
                                    </View>
                                </Animatable.View>
                            )
                        }}
                    />
                </>
            )
        }
        else {
            return (
                <>

                    <View style={{ alignItems: "center" }}>
                        <Animatable.View
                            style={styles.noResultLottie}
                            animation={notFound}
                            delay={600}
                            useNativeDriver
                        >
                            <LottieView source={require("../assets/138644-sirius-space-boy.json")} autoPlay loop style={[{ width: 200, height: 200 }]} />
                        </Animatable.View>
                        <Animatable.View
                            style={{ alignItems: "center" }}
                            animation={opacity}
                            delay={400}
                            useNativeDriver
                        >
                            <View style={styles.noResultTextContainer}>
                                <Text style={styles.noResultText}>If it doesn't exist,</Text>
                                <Text style={styles.noResultText}>it's time you create it!</Text>
                            </View>
                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.7 }, styles.createButton]} onPress={() => navigation.navigate("creation")}>
                                <Text style={styles.visitText}>Create</Text>
                            </Pressable>
                        </Animatable.View>
                    </View>
                </>
            )
        }
    }
    else {
        return (
            <>
                <FlatList
                    data={resultOutput}
                    keyExtractor={(_, index) => index}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SPACING }}
                    renderItem={({ item, index }) => {
                        return (
                            <Animatable.View
                                style={styles.card}
                                animation={animation}
                                delay={200 + index * 200}
                                useNativeDriver>
                                <View style={styles.top}>
                                    <View style={styles.image}>
                                        <View style={styles.shadow}>
                                            <Image
                                                source={{ uri: item.url }}
                                                style={styles.actualImg}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.data}>
                                        <Text style={styles.info1}>{item.name}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <FontAwesome name="hashtag" size={14} color={colors.text} style={{ marginTop: 7, marginRight: 6, opacity: 0.7 }} />
                                            <Text style={styles.info}>{item.tag}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <AntDesign name="star" size={18} color={colors.text} style={{ marginTop: 4, marginRight: 6, opacity: 0.7 }} />
                                            <Text style={styles.info}>{item.type}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <MaterialIcons name="group" size={20} color={colors.text} style={{ marginTop: 4, marginRight: 6, opacity: 0.7 }} />
                                            <Text style={styles.info}>{item.activeMembers} members</Text>
                                        </View>
                                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.visit]}>
                                            <Text style={styles.visitText}>Visit</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.motto}>"{item.motto}"</Text>
                                </View>
                            </Animatable.View>
                        )
                    }}
                />
            </>
        )
    }
}

export default function SearchResult({ navigation, route }) {
    const { title, url, search } = route.params;
    const [loadingResult, setLoadingResult] = React.useState(true);
    const [resultOutput, setResultOutput] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            if (title === "React") setResultOutput(null);
            else setResultOutput(suggestions);
            setLoadingResult(false)
        }, 2000)
    }, [])

    return (
        <View>
            <View>
                <Image
                    source={{ uri: url }}
                    style={styles.cover}
                />
                <View style={{ position: "absolute", top: height * 0.28, left: SPACING }}>
                    <Text style={[styles.title]}>{title}</Text>
                </View>
            </View>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {getRightContent(search, loadingResult, title, 4, resultOutput, navigation)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    createButton: {
        width: 100,
        height: 30,
        borderRadius: SPACING,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.buttonBG
    },
    noResultText: {
        fontWeight: "bold",
        fontSize: 22,
        letterSpacing: 0.6,
        lineHeight: 26
    },
    noResultTextContainer: {
        height: 80,
        width: 300,
        marginTop: 2 * SPACING,
        alignItems: "center"
    },
    noResultLottie: {
        marginLeft: 2 * SPACING,
        marginTop: 4 * SPACING,
        width: 200,
        height: 200
    },
    loaderContainer: {
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    result: {
        fontWeight: "bold",
        fontSize: 22,
        color: colors.text
    },
    searchTab: {
        // borderWidth: 0.5,
        marginTop: SPACING,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    info1: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
        marginBottom: 4
        // marginLeft: SPACING
    },
    motto: {
        fontWeight: "bold",
        paddingHorizontal: SPACING,
        fontSize: 16,
        textAlign: "center",
        lineHeight: 22,
        letterSpacing: 0.8,
        marginTop: SPACING
    },
    visitText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14
    },
    visit: {
        // borderWidth: 0.5,
        height: 26,
        paddingHorizontal: SPACING,
        marginTop: SPACING,
        borderRadius: SPACING,
        width: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.buttonBG
    },
    info: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 4,
        textAlign: "left"
    },
    data: {
        // borderWidth: 0.5,
        height: "100%",
        width: "55%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: SPACING / 2

    },
    shadow: {
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 1, height: 0.5 },
        shadowRadius: 2,
        shadowOpacity: 0.8,
        borderRadius: SPACING
    },
    actualImg: {
        width: height * 0.16,
        height: height * 0.16,
        borderRadius: SPACING,
        resizeMode: "cover",
    },
    image: {
        // borderWidth: 0.5,
        height: "100%",
        width: "45%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    bottom: {
        width: "100%",
        height: "40%",
        // borderWidth: 0.5
    },
    top: {
        width: "100%",
        height: "60%",
        // borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        width: width - 2 * SPACING,
        height: height * 0.33,
        borderWidth: 0.5,
        borderColor: colors.text,
        marginVertical: SPACING,
        borderRadius: SPACING,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 34
    },
    cover: {
        width: width,
        height: height * 0.33,
        resizeMode: "cover"
    }
});