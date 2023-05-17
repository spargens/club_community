import { Dimensions, Text, StyleSheet, View } from "react-native";
import Image from "react-native-scalable-image";
import Autolink from "react-native-autolink";
import { colorsClub, colorsCommunity } from "../constants/data";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import ProfileImage from "./profileImage";

const { width, height } = Dimensions.get("screen");
const SPACING = 12;

export default function ClubHomePin({ data, dark }) {
    return (
        <View style={{ alignItems: "center", marginTop: 18 }}>
            <Image
                source={{ uri: data.url }}
                width={width - 2 * SPACING}
                borderRadius={12}
            />
            <Text style={[styles.text, dark ? { color: colorsCommunity.title } : { color: colorsClub.mainText }]}>
                <Autolink
                    text={data.text}
                    component={Text}
                    email
                    hashtag="instagram"
                    mention="twitter"
                    phone="sms"
                    url
                />
            </Text>
            {getRightIcons(data, dark)}
        </View>
    )
};

function getRightIcons(item, dark) {
    if (item.key === "event") {
        return (
            <View style={styles.postIcons}>
                <View style={styles.eventLeftIcons}>
                    {item.data.dl && <View><MaterialIcons name="verified" size={20} color={dark ? { color: colorsCommunity.title } : { color: colorsClub.mainText }} style={{ marginHorizontal: 6 }} /></View>}
                    {item.data.link && <View><AntDesign name="link" size={20} color={dark ? { color: colorsCommunity.title } : { color: colorsClub.mainText }} style={{ marginHorizontal: 6 }} /></View>}
                </View>
                <View style={styles.eventRightContainer}>
                    {item.data.memberId.map((item, index) => {
                        return (
                            <View key={index} style={[styles.eventAvatar, { marginHorizontal: 6 }]}>
                                <ProfileImage url={item} size={26} />
                            </View>
                        )
                    })}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    eventAvatar: {
        // borderWidth: 0.5,
        width: 26,
        height: 26,
        borderRadius: 13
    },
    eventRightContainer: {
        // borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: "100%"
    },
    eventLeftIcons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    postIcons: {
        // borderWidth: 0.5,
        height: "7%",
        marginTop: "1%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12
    },
    text: {
        fontWeight: "bold",
        marginTop: 12,
        textAlign: "left",
        paddingRight: 18,
        lineHeight: 18
    }
});