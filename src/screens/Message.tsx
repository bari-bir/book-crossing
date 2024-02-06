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
                        <Text>Akbota Test</Text>
                        <Text>Want to change the book!</Text>
                    </View>
                </View>
                <View>
                    <Text>13:44</Text>
                    <View>
                        <Text>1</Text>
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
})
