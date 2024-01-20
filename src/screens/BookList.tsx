import { BookCard } from "../components/BookCard"
import { StyleSheet, View } from "react-native"

export const BookList = () => {
    return (
        <View style={styles.bookWrapper}>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({
    bookWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
})
