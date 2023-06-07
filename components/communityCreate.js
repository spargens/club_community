import React from "react";
import { StyleSheet, View, Text, Dimensions, TextInput, Pressable, Platform, Image } from "react-native";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { colors } from "../constants/data";
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("screen");
const SPACING = 12;

export default function CommunityCreate() {

    const [cover, setCover] = React.useState({ assets: [{ type: "" }] });
    const [logo, setLogo] = React.useState({ assets: [{ type: "" }] });
    const [name, setName] = React.useState(null);
    const [desc, setDesc] = React.useState(null);
    const [creating, setCreating] = React.useState(false);
    const [created, setCreated] = React.useState(null);

    async function uploadPermission(key) {
        if (Platform.OS !== "web") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Permission denied!");
            }
            else {
                uploadFile(key)
            }
        }
    }

    async function uploadFile(key) {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        })
        if (!result.canceled) {
            if (key === "cover") setCover(result);
            else if (key === "logo") setLogo(result);
        }
    }

    async function handleCreationEvent() {
        if (!cover || !logo || !name || !desc) {
            alert("Please fill out the form.");
        }
        else {
            setCreating(true);
            setTimeout(() => {
                setCreating(false);
                setCreated(true);
            }, 3000);
        }
    }

    function getRightContent() {
        if (creating) {
            return (
                <View style={styles.creatingLoaderContainer}>
                    <LottieView source={require("../assets/141572-space-boy-developer.json")} autoPlay loop style={[{ width: 260, height: 260 }]} />
                    <Text style={styles.creatingText}>It is start something of something great!</Text>
                    <Text style={styles.creatingText}>{`Hang on while we are creating the community ${name}`}</Text>
                </View>
            )
        }
        else if (created) {
            return (
                <View style={styles.creatingLoaderContainer}>
                    <LottieView source={require("../assets/110798-space.json")} autoPlay loop style={[{ width: 260, height: 260 }]} />
                    <Text style={styles.creatingText}>Successfully created community!</Text>
                    <Pressable style={({ pressed }) => [styles.create, pressed && { opacity: 0.5 }]}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Visit</Text>
                    </Pressable>
                </View>
            )
        }
        else {
            return (
                <>
                    <TextInput
                        placeholder="Enter the name of the community."
                        style={styles.name}
                        onChangeText={(txt) => setName(txt)}
                    />
                    <Text style={styles.instruction}>Choose a cover image</Text>
                    <View style={styles.previewCover}>
                        <Image source={{ uri: cover.assets[0].uri }} style={styles.coverImage} />
                        <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, { marginTop: height * 0.01, height: height * 0.03 }]} onPress={() => { uploadPermission("cover") }}>
                            <MaterialIcons name="add-a-photo" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.subInstruction}>
                        <Feather name="info" size={24} color="black" />
                        <Text style={styles.subText}>This is how it will look. So choose aspect ratio wisely.</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoContainerBox}>
                            <Text style={styles.logoText}>Choose your logo. Make it eye catching.</Text>
                            <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }, { alignItems: "center", marginTop: SPACING }]} onPress={() => { uploadPermission("logo") }}>
                                <MaterialIcons name="add-a-photo" size={20} color="black" />
                            </Pressable>
                        </View>
                        <View style={styles.logoContainerBox}>
                            <Image
                                source={{ uri: logo.assets[0].uri }}
                                style={styles.logoImage}
                            />
                        </View>
                    </View>
                    <Text style={styles.instruction}>Add a description</Text>
                    <TextInput
                        multiline={true}
                        placeholder="What kind of people you want? What kind of work you will do?"
                        style={styles.description}
                        onChangeText={(txt) => setDesc(txt)}
                    />
                    <Pressable style={({ pressed }) => [styles.create, pressed && { opacity: 0.5 }]} onPress={() => { handleCreationEvent() }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Create</Text>
                    </Pressable>
                </>
            )
        }
    }

    return (
        <View style={styles.container}>
            {getRightContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    creatingText: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        color: colors.text,
        lineHeight: 26,
        letterSpacing: 0.6
    },
    creatingLoaderContainer: {
        // borderWidth: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.5,
        width: width - 2 * SPACING
    },
    create: {
        // borderWidth: 0.5,
        marginTop: 2 * SPACING,
        width: 100,
        height: 30,
        borderRadius: SPACING,
        backgroundColor: colors.buttonBG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    description: {
        // borderWidth: 0.5,
        height: height * 0.15,
        width: width - 2 * SPACING,
        borderRadius: SPACING,
        paddingHorizontal: SPACING,
        paddingTop: SPACING,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0.5, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3,
        marginTop: SPACING
    },
    logoImage: {
        height: 100,
        width: 100,
        borderRadius: SPACING,
        resizeMode: "cover"
    },
    logoContainerBox: {
        // borderWidth: 0.5,
        height: "100%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoText: {
        // borderWidth: 0.5,
        borderColor: "red",
        fontWeight: "bold",
        fontSize: 14,
        letterSpacing: 0.5,
        color: colors.text,
        opacity: 0.8,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    logoContainer: {
        // borderWidth: 0.5,
        marginTop: 2 * SPACING,
        width: width - 2 * SPACING,
        height: 130,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SPACING,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0.5, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3
    },
    subText: {
        marginLeft: SPACING / 2,
        fontWeight: "bold",
        fontSize: 12,
        color: colors.text,
        opacity: 0.7
    },
    subInstruction: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    instruction: {
        marginTop: 1.5 * SPACING,
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.5,
        color: colors.text,
        opacity: 0.8
    },
    coverImage: {
        width: width - (height * 0.35 * 0.15 * height / width),
        height: height * 0.20,
        resizeMode: "cover",
        borderRadius: SPACING,
        // borderWidth: 0.5
    },
    previewCover: {
        // borderWidth: 1.5,
        // borderColor: "#6f6f6e4e",
        marginTop: 0.5 * SPACING,
        // height: height * 0.28,
        width: width - 2 * SPACING,
        borderRadius: SPACING,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        shadowColor: "black",
        shadowOffset: { width: 0.5, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3
    },
    name: {
        borderWidth: 0.5,
        width: width - 2 * SPACING,
        height: 3 * SPACING,
        borderRadius: SPACING,
        paddingHorizontal: SPACING,
        fontWeight: "bold",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1.5 * SPACING
    }
});