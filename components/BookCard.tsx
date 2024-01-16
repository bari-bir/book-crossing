import { View } from "react-native"
import styled from "styled-components/native"

const BookWrapper = styled.Text`
    padding: 10px 11px 5px 11px;
    border-radius: 5px;
    background: #f1f1f1;
`

const BookImage = styled.ImageBackground`
    width: 133px;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
`

export const BookCard = () => {
    return (
        <BookWrapper>
            <BookImage
                source={{
                    uri: "@expo/assets/book-test.png",
                }}>
                <View style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "lightgray 50%" }} />
            </BookImage>
        </BookWrapper>
    )
}
