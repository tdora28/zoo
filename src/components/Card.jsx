import { Link } from 'react-router-dom';

const Card = ({ name, likes, category, decreaseLikes, increaseLikes, removeCard }) => {
  return (
    <div className="card">
      <button className="card__close" onClick={removeCard}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="card__img">
        <img src={`https://source.unsplash.com/400x400/?${name}`} alt={`unsplash image of ${name}`} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <div className="card__rating">
          <button className="card__rating-btn" onClick={decreaseLikes}>
            <span className="material-symbols-outlined">remove</span>
          </button>
          <p className="card__rating-score">
            <span className="material-symbols-outlined">{likes >= 0 ? 'favorite' : 'heart_broken'}</span> <span>{likes}</span>
          </p>
          <button className="card__rating-btn" onClick={increaseLikes}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <Link className="card__see-more" to={`/${category}/${name}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
