const Card = (props) => {
  return (
    <div className='card'>
      <button className='card__close'>
        <span className='material-symbols-outlined'>close</span>
      </button>
      <div className='card__img'>
        <img src={props.img} alt='' />
      </div>
      <div className='card__content'>
        <h2 className='card__title'>{props.name}</h2>
        <div className='card__rating'>
          <button>
            <span className='material-symbols-outlined'>remove</span>
          </button>
          <p>
            <span className='material-symbols-outlined'>{props.rating >= 0 ? 'favorite' : 'heart_broken'}</span> <span>{props.rating}</span>
          </p>
          <button>
            <span className='material-symbols-outlined'>add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
