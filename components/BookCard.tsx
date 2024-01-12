import styled from "styled-components/native";

const BookWrapper = styled.Text`
  padding: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  /* display: flex; */
  align-items: center;
  gap: 5px;
`;

const BookTitle = styled.Text`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BookImage = styled.Image`
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: center;
`;

export const BookCard = () => {
  return (
    <BookWrapper>
      <BookImage
        source={{
          uri: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
        }}
      />
      <BookTitle />
    </BookWrapper>
  );
};
