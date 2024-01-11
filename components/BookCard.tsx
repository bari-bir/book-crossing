import styled from "styled-components/native";

const BookWrapper = styled.Text`
  padding: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  /* display: flex; */
  align-items: center;
  gap: 5px;
`;

const BookImage = styled.Image`
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: center;
`;

export const BookCard = () => {
  return <BookWrapper>Bir kitap</BookWrapper>;
};
