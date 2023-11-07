const Card = ({ name, likes, decreaseLikes, increaseLikes }) => {
  return (
    <div className="card">
      <button className="card__close">
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="card__img">
        <img src={`https://source.unsplash.com/400x400/?${name.toLowerCase()}`} alt="unsplash random image" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <div className="card__rating">
          <button onClick={decreaseLikes}>
            <span className="material-symbols-outlined">remove</span>
          </button>
          <p>
            <span className="material-symbols-outlined">{likes >= 0 ? 'favorite' : 'heart_broken'}</span> <span>{likes}</span>
          </p>
          <button onClick={increaseLikes}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
