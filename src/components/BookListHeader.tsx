import React, { useState } from "react"
import { Image, StyleSheet, View, Text, TextInput } from "react-native"
import SettingImg from "../../assets/images/setting.png"
import LocationImg from "../../assets/images/location.png"
import SearchImg from "../../assets/images/search.png"
import ClearImg from "../../assets/images/clear.png"

export const BookListHeader = () => {
    const [search, setSearch] = useState<string>("")

    return (
        <View style={styles.bookListHeader}>
            <Image source={SettingImg} />
            <Image source={LocationImg} />

            <View style={styles.bookSearch}>
                <TextInput onChangeText={setSearch} value={search} placeholder="Поиск в Алматы" />
                <Image source={ClearImg} style={{ ...styles.searchImg, ...styles.searchClearImg }} />
                <View style={styles.spliceBorder} />
                <Image source={SearchImg} style={{ ...styles.searchImg, ...styles.searchIcon }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookListHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 9,
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
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        position: "relative",
    },
    searchImg: {
        position: "absolute",
        top: 15,
        // transform: [{ translateY: -50 }],
        right: "auto",
        width: 17,
        height: 17,
    },
    searchClearImg: {
        right: 40,
    },
    spliceBorder: {
        position: "absolute",
        top: 0,
        right: 35,
        height: 44,
        width: 1,
        backgroundColor: "#00000066",
    },
    searchIcon: {
        right: 9,
    },
})
