import "../assets/styles/components/bookCard.scss";

interface IBook {
  title: string;
  category: string;
  description: string;
  year: number;
  url: string;
}

export const BookCard = ({ title, category, url, year }: IBook) => {
  return (
    <div className="book">
      <div className="image">
        <img src={url} alt="book" />
      </div>
      <div className="book-Info">
        <p className="book-title">
          {title} <span className="book-year">{year}</span>
        </p>
        <p className="category">{category}</p>
        <div className="book-createTime">
            <p>13.01.2024</p>
            <p>17:05</p>
        </div>
      </div>
    </div>
  );
};

