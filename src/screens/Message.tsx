import { View, Image, TextInput, StyleSheet, Text } from "react-native"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import React, { useState } from "react"
import SearchImage from "../../assets/images/search.png"
import ProfileImage from "../../assets/images/profile.png"

export const Message = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <Page>
            <Header title="Message" isBack={false} />
            <View style={styles.search}>
                <TextInput onChangeText={setSearch} value={search} placeholder="Search..." style={{ paddingLeft: 21 }} />
                <Image source={SearchImage} style={styles.searchImg} />
            </View>

            <View style={styles.contentBlock}>
                <View style={styles.contentWrapper}>
                    <Image style={styles.userProfileImage} source={ProfileImage} />
                    <View>
                        <Text style={styles.userNameText}>Akbota Test</Text>
                        <Text style={styles.userDescr}>Want to change the book!</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.userDescr}>13:44</Text>
                    <View style={styles.notification}>
                        <Text style={styles.notificationText}>1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentBlock}>
                <View style={styles.contentWrapper}>
                    <Image style={styles.userProfileImage} source={ProfileImage} />
                    <View>
                        <Text style={styles.userNameText}>Akbota Test</Text>
                        <Text style={styles.userDescr}>Want to change the book!</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.userDescr}>13:44</Text>
                    <View style={styles.notification}>
                        <Text style={styles.notificationText}>1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentBlock}>
                <View style={styles.contentWrapper}>
                    <Image style={styles.userProfileImage} source={ProfileImage} />
                    <View>
                        <Text style={styles.userNameText}>Akbota Test</Text>
                        <Text style={styles.userDescr}>Want to change the book!</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.userDescr}>13:44</Text>
                    <View style={styles.notification}>
                        <Text style={styles.notificationText}>1</Text>
                    </View>
                </View>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    search: {
        position: "relative",
        height: 41,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        marginBottom: 14,
    },
    searchImg: {
        position: "absolute",
        right: 5,
        width: 22,
        height: 22,
    },
    contentBlock: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: "#D2D2D2",
        borderRadius: 5,
        height: 97,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    contentWrapper: {
        display: "flex",
        gap: 13,
        alignItems: "center",
        flexDirection: "row",
    },
    userProfileImage: {
        width: 65,
        height: 65,
        borderRadius: 100,
    },
    userNameText: {
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 15,
        marginBottom: 11,
        color: "#0045CA",
    },
    userDescr: {
        fontSize: 9,
        fontWeight: "500",
        lineHeight: 10,
        color: "#0045CA",
    },
    notification: {
        width: 16,
        height: 16,
        borderRadius: 100,
        backgroundColor: "#5461F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    notificationText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "700",
    },
})
