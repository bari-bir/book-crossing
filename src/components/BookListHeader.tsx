import React from "react"
import { Image, StyleSheet, View, Text } from "react-native"
import SettingImg from "../../assets/setting.png"
import LocationImg from "../../assets/location.png"

export const BookListHeader = () => {
    return (
        <View style={styles.bookListHeader}>
            <Image source={SettingImg} />
            <Image source={LocationImg} />

            <View style={styles.bookSearch}>
                <Text>ergerg</Text>
                {/* <InputEvent type="text" /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookListHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 41,
        marginBottom: 21,
        gap: 10,
        height: 41,
    },
    bookSearch: {
        flex: 1,
        paddingVertical: 11,
        height: 44,
        paddingLeft: 15,
        paddingRight: 9,
        bordeRadius: 5,
        backgroundColor: "#D9D9D9",
    },
})
