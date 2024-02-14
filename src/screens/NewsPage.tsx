import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"
import { BookListHeader } from "../components/BookListHeader"
import { Page } from "../layouts/page"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export const NewsPage = ({ navigation }) => {
    console.log(navigation)
    return (
        <Page>
            <BookListHeader />
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
        </Page>
    )
}
