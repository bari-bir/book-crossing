import { Image, View, Text, StyleSheet, TextInput } from "react-native"
import UploadImage from "../../assets/images/uploadImg.png"
import { Header } from "../components/Header"
import { Page } from "../layouts/page"
import { useState } from "react"

export const CreateAnnouncement = () => {
    const [title, setTitle] = useState<string>("")
    return (
        <Page>
            <Header title={"Create Announcement"} isBack={false} />
            <View style={styles.uploadBlock}>
                <Image source={UploadImage} style={{ width: 155, height: 153 }} />
                <Text style={styles.uploadText}>Upload the photo</Text>
            </View>
            <View style={styles.infoValues}>
                <View style={styles.infoWrapper}>
                    <TextInput style={{ ...styles.infoBlock, flex: 5, ...styles.infoText }} value={title} onChangeText={setTitle} placeholder={"Title"} />
                    <View style={{ ...styles.infoBlock, flex: 1, display: "flex", justifyContent: "center" }}>
                        <Text style={styles.infoText}>Year</Text>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <TextInput style={{ ...styles.infoBlock, flex: 5, ...styles.infoText }} value={title} onChangeText={setTitle} placeholder={"Category"} />
                    <View style={{ ...styles.infoBlock, flex: 1, display: "flex", justifyContent: "center" }}>
                        <Text style={styles.infoText}>City</Text>
                    </View>
                </View>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    infoWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 12,
        marginBottom: 20,
        justifyContent: "space-between",
        position: "relative",
    },
    infoText: {
        fontSize: 12,
        fontWeight: "400",
    },
    infoBlock: {
        height: 32,
        borderRadius: 2,
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderStyle: "solid",
        borderWidth: 1,
        paddingLeft: 6,
        position: "relative",
    },
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
