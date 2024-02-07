import { View, Text } from "react-native"
import React from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"

export const Request = () => {
    return (
        <Page>
            <Header title={"Request"} isBack={false} />
            <View>
                <Text>HELLO WORLD</Text>
            </View>
        </Page>
    )
}
