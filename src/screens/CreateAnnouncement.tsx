import { Image, View, Text, StyleSheet } from "react-native"
import UploadImage from "../../assets/uploadImg.png"
import { Header } from "../components/Header"
import { Page } from "../layouts/page"

export const CreateAnnouncement = () => {
    return (
        <Page>
            <Header title={"Create Announcement"} isBack={false} />
            <View style={styles.uploadBlock}>
                <Image source={UploadImage} style={{ width: 155, height: 153 }} />
                <Text style={styles.uploadText}>Upload the photo</Text>
            </View>
            <View style={styles.infoValues}></View>
        </Page>
    )
}

const styles = StyleSheet.create({
    uploadBlock: {
        marginTop: 8,
        height: 260,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    uploadText: {
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#686868",
        borderStyle: "solid",
    },
    infoValues: {
        marginTop: 32,
        borderRadius: 10,
        backgroundColor: "#E2DDDD",
        paddingHorizontal: 20,
        paddingTop: 27,
        paddingBottom: 21,
    },
})
