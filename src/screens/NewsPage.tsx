import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"
import { BookListHeader } from "../components/BookListHeader"
import { Page } from "../layouts/page"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export const NewsPage = ({ navigation }: { navigation: NativeStackScreenProps }) => {
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
