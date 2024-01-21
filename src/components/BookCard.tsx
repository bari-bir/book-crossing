import { StyleSheet, View, Text, Image } from "react-native"
import { SvgUri } from "react-native-svg"
import BookTest from "../../assets/book-test.png"

export const BookCard = () => {
    return (
        <View style={styles.bookContainer}>
            <Image source={BookTest} style={styles.bookImage} />
            <View style={styles.bookInfo}>
                <View style={styles.bookTopInfo}>
                    <View style={styles.bookTextBlock}>
                        <Text style={styles.bookTittleText}>Кемел адам</Text>
                        <Text style={{ ...styles.bookTittleText, fontSize: 10 }}>2020</Text>
                    </View>
                    <View style={styles.bookDots}>
                        {/*<SvgUri uri={DotIcon} width={9} height={9} /> TDOO add svg*/}
                        <Text style={{ ...styles.bookTittleText, fontSize: 10 }}>○ ○ ○</Text>
                    </View>
                </View>
                <View style={{ ...styles.bookTopInfo, ...styles.bookBottomInfo }}>
                    <View>
                        <Text>Саморазвитие</Text>
                        <Text>20.01.2024</Text>
                    </View>
                    <Text>10:47</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        width: 165,
        paddingHorizontal: 11,
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
    },
    bookImage: {
        width: "100%",
        height: 111,
    },
    imageStyle: {
        borderRadius: 5,
        background: "red 50%",
    },
    bookInfo: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        gap: 3,
    },
    bookTopInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
    },
    bookTextBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    bookTittleText: {
        color: "#000",
        fontSize: 11.8,
        fontWeight: "400",
        textTransform: "capitalize",
    },
    dotImage: {
        width: 9,
        height: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    bookDots: {
        display: "flex",
        alignItems: "center",
    },
    bookBottomInfo: {
        marginTop: 5,
    },
})
