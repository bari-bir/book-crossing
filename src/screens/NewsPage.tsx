import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"
import { BookListHeader } from "../components/BookListHeader"
import { Page } from "../layouts/page"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/MainNavigation"

type Props = NativeStackScreenProps<RootStackParamList, "BookDetail">

export const NewsPage = () => {
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
