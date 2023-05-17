import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Animated, Text, Pressable, Share, Platform } from "react-native";
import { bg } from "../constants/data";
import { gallery, gallery2 } from "../constants/data";
import Image from "react-native-scalable-image";
import { Entypo, Ionicons } from '@expo/vector-icons';

import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

const { width, height } = Dimensions.get("screen");
const SPACING = 15;
let h = [];



export default function ImageViewer() {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    const downloadFromUrl = async (url, index) => {
        const filename = `macbeaseClub${index}.jpeg`;
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status !== "granted") {
            return;
        }
        const downloadInstance = FileSystem.createDownloadResumable(
            url,
            FileSystem.documentDirectory + filename
        );
        const result = await downloadInstance.downloadAsync();
        try {
            const asset = await MediaLibrary.createAssetAsync(result.uri);
            const album = await MediaLibrary.getAlbumAsync("Download");
            if (!album) {
                await MediaLibrary.createAlbumAsync("Download", asset, false);
            }
            else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
        } catch (error) {
            console.log(error);
        }
        if (Platform.OS === "ios") {
            await save(result.uri);
        }
    }

    const save = async (uri) => {
        await shareAsync(uri);
    }

    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [h, seth] = React.useState();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.blurredImage}>
                <Image source={{ uri: bg }} style={{ width: "100%", height: "100%", resizeMode: "cover" }} blurRadius={5} />
            </View>
            <ScrollView
                style={styles.flatList}
                contentContainerStyle={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View style={styles.column}>
                    {gallery2.map((item, index) => {
                        return (
                            <View style={{ marginTop: 25 }} key={index}>
                                <Image
                                    source={{ uri: item.url }}
                                    width={width / 2 - 2 * SPACING}
                                    style={{ borderRadius: 12 }}
                                    resizeMode="cover"
                                />
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                                    <View style={styles.subText}><Text numberOfLines={1} style={styles.text}>{item.desc}</Text></View>
                                    <View style={styles.icon}>
                                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]} onPress={() => { onShare }}>
                                            <Entypo name="share" size={16} color="white" />
                                        </Pressable>
                                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, { marginLeft: 6 }]} onPress={() => { downloadFromUrl(item.url, index) }}>
                                            <Ionicons name="ios-cloud-download-sharp" size={16} color="white" />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.column}>
                    {gallery.map((item, index) => {
                        return (
                            <View style={{ marginTop: 25 }} key={index}>
                                <Image
                                    source={{ uri: item.url }}
                                    width={width / 2 - 2 * SPACING}
                                    style={{ borderRadius: 12 }}
                                    resizeMode="cover"
                                />
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                                    <View style={styles.subText}><Text numberOfLines={1} style={styles.text}>{item.desc}</Text></View>
                                    <View style={styles.icon}>
                                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]} onPress={() => { onShare }}>
                                            <Entypo name="share" size={16} color="white" />
                                        </Pressable>
                                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, { marginLeft: 6 }]} onPress={() => { downloadFromUrl(item.url, index) }}>
                                            <Ionicons name="ios-cloud-download-sharp" size={16} color="white" />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        color: "white"
    },
    icon: {
        // borderWidth: 0.5,
        width: 40,
        height: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    subText: {
        // borderWidth: 0.5,
        width: 130,
        height: 20
    },
    pin: {
        width: "100%"
    },
    column: {
        // borderWidth: 0.5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    flatList: {
        // borderWidth: 0.5,
        position: "absolute",
        // borderWidth: 0.5,
        height: height,
        width: width,
        zIndex: 10
    },
    blurredImage: {
        width: width,
        height: height,
        zIndex: 0
    }
});