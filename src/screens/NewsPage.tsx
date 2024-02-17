import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"
import { BookListHeader } from "../components/BookListHeader"
import { Page } from "../layouts/page"

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
