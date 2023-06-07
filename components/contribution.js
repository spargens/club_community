import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorsCommunity, contribution, communityData } from "../constants/data";
import { EvilIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import CommunityHomePin from "./communityHomePin";
import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("screen");
const animation = {
    0: { opacity: 0 },
    1: { opacity: 1 }
};
const animation2 = {
    0: { opacity: 0, translateX: -200 },
    1: { opacity: 1, translateX: 0 }
};

export default function Contribution() {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const opacity = scrollY.interpolate({
        inputRange: [-height * 0.3, 0, height * 0.3],
        outputRange: [0, 0, 1]
    });

    return (
        <SafeAreaView>
            <Animated.View style={[styles.topLayer, { opacity }]}>
                <View style={[styles.align2, { marginLeft: 3 }]}>
                    <AntDesign name="heart" size={16} color="#f44646db" style={{ marginTop: 6, marginRight: 4 }} />
                    <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.likes} likes</Text>
                </View>
                <View style={[styles.align2, { marginRight: 12 }]}>
                    <AntDesign name="star" size={18} color="black" style={{ marginTop: 6, marginRight: 4 }} />
                    <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.rating} points</Text>
                </View>
                <View style={[styles.align2, { marginRight: 12 }]}>
                    <MaterialIcons name="post-add" size={20} color="black" style={{ marginTop: 6, marginRight: 4 }} />
                    <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.contributions} contributions</Text>
                </View>
            </Animated.View>
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
            >
                <Animatable.View
                    animation={animation}
                    delay={300}
                    useNativeDriver
                >
                    <View style={styles.profile}>
                        <Image
                            source={{ uri: contribution.profile }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.userName}>
                        <Text style={styles.text1}>{contribution.name}</Text>
                        <Text style={styles.text2}>@ {contribution.community}</Text>
                        <View style={styles.align1}>
                            <View style={[styles.align2, { marginTop: 12 }]}>
                                <EvilIcons name="calendar" size={22} color="black" style={{ marginTop: 6, marginRight: 2 }} />
                                <Text style={[styles.text2, { fontSize: 14 }]}>Joined {contribution.joinDate}</Text>
                            </View>
                        </View>
                        <View style={styles.align1}>
                            <View style={[styles.align2, { marginLeft: 3 }]}>
                                <AntDesign name="heart" size={16} color="#f44646db" style={{ marginTop: 6, marginRight: 4 }} />
                                <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.likes} likes</Text>
                            </View>
                            <View style={[styles.align2, { marginRight: 12 }]}>
                                <AntDesign name="star" size={18} color="black" style={{ marginTop: 6, marginRight: 4 }} />
                                <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.rating} points</Text>
                            </View>
                            <View style={[styles.align2, { marginRight: 12 }]}>
                                <MaterialIcons name="post-add" size={20} color="black" style={{ marginTop: 6, marginRight: 4 }} />
                                <Text style={[styles.text2, { fontSize: 14 }]}>{contribution.contributions} contributions</Text>
                            </View>
                        </View>
                        <View style={styles.align1}></View>
                        <View style={[styles.align2, { marginLeft: 3 }]}>
                            <Text style={[styles.text2, { fontSize: 14, marginTop: 12 }]}>Best Streak: {contribution.bestStreak} days</Text>
                        </View>
                        <View style={[styles.align2, { marginLeft: 3 }]}>
                            <Text style={[styles.text2, { fontSize: 14, }]}>Current Streak: {contribution.currentStreak} days</Text>
                        </View>
                    </View>
                </Animatable.View>
                <View style={styles.separator}></View>
                {communityData.map((item, index) => {
                    return (
                        <Animatable.View
                            key={index}
                            animation={animation2}
                            delay={300 + 200 * index}
                            useNativeDriver
                        >
                            <CommunityHomePin data={item} />
                        </Animatable.View>
                    )
                })}
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    align2: {
        flexDirection: "row",
        alignItems: "center"
    },
    align1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    topLayer: {
        marginTop: 50,
        zIndex: 10,
        position: "absolute",
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    separator: {
        borderWidth: 0.5,
        borderColor: colorsCommunity.label,
        marginTop: 6,
        marginBottom: 12
    },
    text2: {
        fontWeight: "bold",
        fontSize: 18,
        color: colorsCommunity.label,
        marginTop: 6
    },
    text1: {
        fontSize: 34,
        fontWeight: "bold",
        color: colorsCommunity.label
    },
    userName: {
        marginTop: 12,
        marginLeft: 12,
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 12,
        marginTop: 12,
        backgroundColor: "white",
        shadowColor: "black",
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        resizeMode: "cover"
    }
});