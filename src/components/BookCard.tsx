import {StyleSheet, View, Text} from "react-native"
import BookTest from "../../assets/book-test.png"


export const BookCard = () => {

    return (
        <View style={styles.bookContainer}>
            <Text>rwgeger</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    bookContainer: {
        paddingTop: 10,
        paddingEnd: 5,
        paddingVertical: 11,
        backgroundColor: '#f1f1f1',
        borderRadius: 5
    }
})

