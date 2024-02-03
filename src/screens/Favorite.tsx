import { Header } from "../components/Header"
import { Page } from "../layouts/page"
import { BookList } from "../components/BookList"
import { BookCard } from "../components/BookCard"

export const Favorite = () => {
    return (
        <Page>
            <Header title={"Favorite"} isBack={false} />
            <BookList>
                <BookCard isFavorite={true} />
                <BookCard isFavorite={true} />
                <BookCard isFavorite={true} />
                <BookCard isFavorite={true} />
                <BookCard isFavorite={true} />
            </BookList>
        </Page>
    )
}
