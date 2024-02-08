import { View, Text, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import BookImage from "../../assets/images/book-test.png"

export const Request = () => {
    const [tabInfo, setTabInfo] = useState<{ type: string }>({ type: "request" })
    return (
        <Page>
            <Header title={"Request"} isBack={false} />
            <View style={{ ...styles.requestTabs }}>
                <Text>Requests</Text>
                <Text>Announcement</Text>
            </View>

            <View style={styles.requestBlock}>
                <Image style={styles.requestBookImg} source={BookImage} />

                <View style={styles.requestInfo}>
                    <Text>Akbota Zhumakhanbet</Text>
                    <Text>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                    {/* ADD BUTTONS */}
                </View>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    requestTabs: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 7,

        /**
         * @TODO add tab for request and announcement
         */
        "&::before": {
            content: "",
            position: "absolute",
            top: 0,
            display: "flex",
            flex: 1,
            width: "100%",
            height: 1,
            backgroundColor: "#C2BEBE",
        },
    },
    requestTab: {
        width: "50%",
    },
    requestBlock: {
        marginTop: 13,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 5,
        height: 100,
        backgroundColor: "#F6F5F5",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10,
    },
    requestBookImg: {
        height: 85,
        width: 85,
    },
    requestInfo: {
        flex: 1,
    },
})
