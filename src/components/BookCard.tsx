import {StyleSheet, View, Text} from "react-native"
import BookTest from "../../assets/book-test.png"


export const BookCard = () => {

    return (
        <View style={styles.bookContainer}>
            <Text>ergreg</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    bookContainer: {
        paddingHorizontal: 11,
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 5
    }
})

