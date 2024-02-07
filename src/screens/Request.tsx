import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"

export const Request = () => {
    const [tabInfo, setTabInfo] = useState<{ type: string }>({ type: "request" })
    return (
        <Page>
            <Header title={"Request"} isBack={false} />
            <View style={{ ...styles.requestTabs }}>
                <Text>Requests</Text>
                <Text>Announcement</Text>
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
})
