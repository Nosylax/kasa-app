import "./Rating.css";
import emptyStar from "../../assets/star.png";
import star from "../../assets/starcompleted.png";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starImg =
      i <= rating ? (
        <img key={i} src={star} alt="Etoile pleine" />
      ) : (
        <img key={i} src={emptyStar} alt="Etoile vide" />
      );
    stars.push(starImg);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
