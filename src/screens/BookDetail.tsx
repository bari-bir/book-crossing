import { ImageBackground, Text, View, StyleSheet, Image } from "react-native"
import BookImage from "../../assets/images/book-test.png"
import HeartDisactive from "../../assets/images/heart-disactive.png"
import Icon from "@ant-design/react-native/lib/icon"
import { useEffect, useState } from "react"
import { loadAsync } from "expo-font"
// import { outlineGlyphMap, OutlineGlyphMapType } from "@ant-design/icons-react-native/lib/outline"

export const BookDetail = () => {
    const [fontLoaded, setFontLoaded] = useState<boolean>(false)

    useEffect(() => {
        _loadAssets()
    }, [])

    async function _loadAssets() {
        await loadAsync({
            antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
            antfill: require("@ant-design/icons-react-native/fonts/antfill.ttf"),
        })
        setFontLoaded(true)
    }

    return (
        <ImageBackground style={styles.backImg} resizeMode="contain" source={BookImage}>
            <Icon name={"close-circle"} />
            <View style={styles.bookWrapper}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>Кемел адам</Text>
                    <Text style={{ ...styles.bookTitle, fontSize: 14 }}>2020</Text>
                    <Text style={styles.bookDescr}>Саморазвитие</Text>
                </View>
                <View style={styles.bookSubInfo}>
                    <Text style={{ ...styles.bookDescr, flex: 1 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ex praesentium quam consequuntur architecto cum, aperiam voluptas similique, possimus totam fugiat eligendi quod odio blanditiis illum tempore quae ab distinctio.</Text>
                    <View style={styles.favoriteBlock}>
                        <Image style={styles.favoriteIcon} source={HeartDisactive} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImg: {
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    bookWrapper: {
        width: "90%",
        position: "absolute",
        bottom: 25,
        borderRadius: 20,
        minHeight: 262,
        backgroundColor: "#fff",
        paddingTop: 16,
        paddingBottom: 25,
        paddingHorizontal: 30,
    },
    bookInfo: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    bookTitle: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24,
    },
    bookDescr: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 13,
    },
    bookSubInfo: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 25,
    },
    favoriteBlock: {
        width: 26,
        height: 26,
        backgroundColor: "#C8C8C8CC",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    favoriteIcon: {
        width: 16,
        height: 16,
    },
})
