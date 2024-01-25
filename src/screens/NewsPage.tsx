import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"
import { SafeAreaView, ScrollView, View } from "react-native"

export const NewsPage = () => {
    return (
        <SafeAreaView>
            <ScrollView style={{ flexGrow: 1, marginTop: 103, paddingHorizontal: 16 }}>
                <BookList>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </BookList>
            </ScrollView>
        </SafeAreaView>
    )
}
