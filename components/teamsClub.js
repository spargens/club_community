import { View, Text, Dimensions, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { profile, colorsClub } from "../constants/data";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const url = "https://images.pexels.com/photos/5487952/pexels-photo-5487952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const { width, height } = Dimensions.get("screen");
let ids = [];

const animation = {
    0: { opacity: 0 },
    1: { opacity: 1 }
}

export default function Teams() {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.blurredImage]}>
                <Image source={{ uri: url }} style={[StyleSheet.absoluteFillObject]} blurRadius={5} />
            </View>
            <View style={styles.teamsContainer}>
                <Text style={styles.teamTitle}>Our team...</Text>
                <FlatList
                    data={profile}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        ids.push({ id: `team-image-${index}` });
                        return (
                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.teamCard]}>
                                <SharedElement id={`team-image-${index}`} key={index}>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                </SharedElement>
                                <Animatable.View
                                    style={styles.cardTextContainer}
                                    animation={animation}
                                    delay={400 + index * 300}
                                    useNativeDriver
                                >
                                    <Text style={styles.cardText}>{item.name}</Text>
                                    <Text style={styles.cardText}>{item.jobTitle}</Text>
                                </Animatable.View>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View>
    )
}


Teams.sharedElements = (route, otherRoute, showing) => {
    return ids
}


const styles = StyleSheet.create({
    cardText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 2
    },
    cardTextContainer: {
        marginTop: 6
    },
    teamTitle: {
        marginTop: 55,
        fontWeight: "bold",
        color: "white",
        fontSize: 26
    },
    image: {
        // borderWidth: 0.5,
        height: width * 0.3,
        width: width * 0.3,
        borderRadius: width * 0.15,
        resizeMode: "cover"
    },
    teamCard: {
        // borderWidth: 0.5,
        height: height * 0.25,
        width: width * 0.35,
        marginHorizontal: 20,
        marginVertical: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorsClub.backgroundColor,
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 6, height: 4 },
        borderRadius: 22,
        elevation: 1
    },
    teamsContainer: {
        // borderWidth: 0.5,
        height: height,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    blurredImage: {
        position: "absolute",
        zIndex: 0,
        height: height,
        width: width
    }
})