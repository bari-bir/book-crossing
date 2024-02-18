import { Image, View, Text, StyleSheet, TextInput } from "react-native"
import UploadImage from "../../assets/images/uploadImg.png"
import { Header } from "../components/Header"
import { Page } from "../layouts/page"
import { useState } from "react"
import Icon from "@ant-design/react-native/lib/icon"

export const CreateAnnouncement = () => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
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
                    <Icon name="pic-center" style={{ ...styles.infoImage, right: 75 }} />
                    <Icon name="calendar" style={{ ...styles.infoImage, right: 5 }} />
                </View>
                <View style={styles.infoWrapper}>
                    <TextInput style={{ ...styles.infoBlock, flex: 5, ...styles.infoText }} value={title} onChangeText={setTitle} placeholder={"Category"} />
                    <View style={{ ...styles.infoBlock, flex: 1, display: "flex", justifyContent: "center" }}>
                        <Text style={styles.infoText}>City</Text>
                    </View>
                
                    <Icon name="appstore" style={{ ...styles.infoImage, right: 75 }} />
                    <Icon name="environment" style={{ ...styles.infoImage, right: 5 }} />
                </View>
                <View>
                    <TextInput value={description} onChangeText={setDescription} multiline={true} numberOfLines={10} style={styles.infoTextArea} placeholder="Type  a  message here ..." />
                </View>
            </View>

            <View style={styles.btnSend}>
                <Text style={styles.btnText}>Send</Text>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    btnSend: {
        marginTop: 18,
        marginBottom: 13,
        marginLeft: "auto",
        marginRight: "auto",
        width: 260,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#525DDD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    infoTextArea: {
        height: 136,
        backgroundColor: "#fff",
        paddingTop: 8,
        paddingLeft: 6,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
        borderRadius: 2,
        textAlignVertical: "top",
    },
    infoImage: {
        width: 20,
        height: '100%',
        color: "#F24E1E",
        position: "absolute",
        top: 5,
    },
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
