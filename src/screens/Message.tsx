import { View, Image, TextInput, StyleSheet } from "react-native"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import { useState } from "react"
import SearchImage from "../../assets/images/search.png"

export const Message = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <Page>
            <Header title="Message" isBack={false} />
            <View style={styles.search}>
                <TextInput onChangeText={setSearch} value={search} placeholder="Search..." style={{ paddingLeft: 21 }} />
                <Image source={SearchImage} style={styles.searchImg} />
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
    },
    searchImg: {
        position: "absolute",
        right: 5,
        width: 22,
        height: 22,
    },
})
