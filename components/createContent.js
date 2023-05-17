import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TextInput, Pressable, Platform } from "react-native";
import { cover, colorsCommunity } from "../constants/data";
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Autolink from "react-native-autolink";
import * as ImagePicker from "expo-image-picker";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";


export default function CreateContent() {
    const [text, setText] = useState(null);
    const [file, setFile] = useState({ assets: [{ type: "" }] });
    async function uploadPermission() {
        if (Platform.OS !== "web") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Permission denied!");
            }
            else {
                uploadFile()
            }
        }
    }

    async function uploadFile() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1
        })
        if (!result.canceled) {
            setFile(result);
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <SharedElement id={`coverPhoto`}>
                <View style={styles.coverBox}>
                    <Image source={cover.secondary} style={styles.image} />
                </View>
            </SharedElement>
            <SharedElement id={`title`}>
                <View style={{ flexDirection: "row", width: 300 }}>
                    <Text style={[styles.title]}>{cover.title}</Text>
                    <MaterialIcons name="verified" size={20} color="#1ea1ed" />
                </View>
            </SharedElement>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: cover.user }} style={styles.userProfile} />
                <View style={styles.stats}>
                    <View style={styles.statBox}>
                        <View style={styles.icon}>
                            <Octicons name="graph" size={16} color="#949498" />
                        </View>
                        <View style={styles.iconText}>
                            <Text style={styles.statText}>32 contributions</Text>
                        </View>
                    </View>
                    <View style={styles.statBox}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="police-badge" size={20} color="green" />
                        </View>
                        <View style={styles.iconText}>
                            <Text style={[styles.statText]}>Elite member!</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.scrollPreview}>
                <TextInput
                    placeholder="Compose your thought..."
                    multiline
                    style={styles.textInput}
                    value={text}
                    onChangeText={t => setText(t)}
                />
                <View style={{ position: "absolute", zIndex: -20 }}><Text style={[{ fontWeight: "bold", color: "#444" }, text && { opacity: 0 }]}>Compose your message here...</Text></View>
                <View style={{ position: "absolute" }}>
                    <Autolink
                        text={text}
                        email
                        hashtag="instagram"
                        mention="twitter"
                        phone="sms"
                        url
                    />
                </View>
                <View style={styles.previewContainer}>
                    <Image source={{ uri: file.assets[0].uri }} style={{ width: 400, height: 400, resizeMode: "contain", borderRadius: 12 }} />
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, { marginTop: 12 }]} onPress={uploadPermission}>
                        <MaterialIcons name="add-a-photo" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.post}>
                    <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.postBox]}>
                        <Text style={styles.postText}>Post</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
};

CreateContent.sharedElements = (route, otherRoute, showing) => {
    return [{ id: "title" }, { id: "coverPhoto" },]
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 12
    },
    coverBox: {
        width: 100,
        height: 100,
        // borderWidth: 0.5,
        borderRadius: 12,
        marginLeft: 6,
        marginTop: 60
    },
    postText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        paddingHorizontal: 6,
        paddingVertical: 3,

    },
    postBox: {
        width: 150,
        height: 40,
        borderRadius: 12,
        // borderWidth: 0.5,
        backgroundColor: "#1ea1ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    post: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
    },
    previewContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18
    },
    textInput: {
        // borderWidth: 0.5,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0
    },
    scrollPreview: {
        flex: 1,
        // borderWidth: 0.5,
        paddingHorizontal: 6,
        marginTop: 22,
    },
    iconText: {
        // borderWidth: 0.5,
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    icon: {
        // borderWidth: 0.5,
        height: "100%",
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    statBox: {
        // borderWidth: 0.5,
        height: "50%",
        width: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    statText: {
        fontWeight: "bold",
        color: "#444",
        fontSize: 12
    },
    stats: {
        // borderWidth: 0.5,
        marginLeft: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        height: 40,
        width: 150,
    },
    userProfile: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 6,
        marginTop: 12,
        resizeMode: "cover"
    },
    title: {
        fontWeight: "bold",
        color: colorsCommunity.title,
        fontSize: 40,
        marginLeft: 6
    }
})