import React from "react"
import { Image, StyleSheet, View } from "react-native"
import SettingImg from "../../assets/setting.png"
import LocationImg from "../../assets/location.png"

export const BookListHeader = () => {
    return (
        <View style={styles.bookListHeader}>
            <Image source={SettingImg} />
            <Image source={LocationImg} />

            {/*TODO add input search*/}
            <View></View>
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
})
