import React from "react";
import { StyleSheet, View, Text, Pressable, FlatList, Dimensions, Image, Animated, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, communityData, homePage } from "../constants/data";
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { ccHome } from "../constants/data";
import SimilarCommunity from "../components/similarCommunity";
import CommunityHomePin from "../components/communityHomePin";
import ClubHomePin from "../components/clubHomePin";
import SimilarClub from "../components/similarClubs";

const { width, height } = Dimensions.get("screen");
const DOT_SIZE = 22;

const Pagination = ({ scrollX }) => {
    const inputRange = [-width, 0, width];
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-DOT_SIZE + 6, 0, DOT_SIZE + 6]
    });
    return (
        <View style={styles.paginationContainer}>
            <Animated.View
                style={[styles.paginationIndicator, { position: "absolute", transform: [{ translateX }] }]}
            />
            {ccHome.map((item, index) => {
                return (
                    <View style={[styles.dot, { backgroundColor: item.color }]} key={index}></View>
                )
            })}
        </View>
    )
}

export default function Landing({ navigation }) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef(new Animated.Value(0)).current;
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
        })
    }, [index]);


    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Social</Text>
                    <View style={styles.icons}>
                        <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => { navigation.navigate("search") }}>
                            <FontAwesome name="search" size={20} color={colors.text} style={{ marginRight: 12 }} />
                        </Pressable>
                        <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }}>
                            <Ionicons name="notifications" size={24} color={colors.text} />
                        </Pressable>
                        <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => { navigation.navigate("following") }}>
                            <AntDesign name="QQ" size={22} color={colors.text} style={{ marginLeft: 12 }} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Animated.FlatList
                        ref={ref}
                        initialScrollIndex={index}
                        data={ccHome}
                        keyExtractor={(_, index) => index}
                        horizontal
                        pagingEnabled
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.topCard}>
                                    <Image
                                        source={{ uri: item.url }}
                                        style={styles.topImage}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Pagination scrollX={scrollX} />
                </View>
                <SimilarCommunity />
                <CommunityHomePin data={communityData[1]} />
                <SimilarClub />
                <CommunityHomePin data={communityData[2]} />
                <ClubHomePin data={homePage[1]} dark={true} />
                {ccHome.map((item, index) => {
                    return (
                        <View style={{ width: width, height: 600 }} key={index}></View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        borderWidth: 2,
        borderColor: "#ddd",
        left: -1
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginHorizontal: 6
    },
    paginationContainer: {
        // borderWidth: 0.5,
        width: 132,
        marginTop: 6,
        height: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    topImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    topCard: {
        width: width,
        height: height * 0.3,
        // borderWidth: 0.5
    },
    topContainer: {
        // borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12
    },
    title: {
        fontWeight: "bold",
        fontSize: 38,
        marginTop: 6,
        color: colors.text
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});