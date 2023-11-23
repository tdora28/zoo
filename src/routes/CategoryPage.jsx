import { useParams } from 'react-router-dom';

import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';

function CategoryPage(props) {
  let urlParams = useParams();
  const category = urlParams.category;

  function displayCards(length) {
    if (length > 0) {
      return (
        <>
          {props.zoo[category]
            .filter((el) => {
              return el.name.toLowerCase().includes(props.search.toLowerCase());
            })
            .map((el) => {
              return (
                <Card
                  key={el.name}
                  {...el}
                  category={category}
                  removeCard={() => props.removeCard(el.name, category)}
                  decreaseLikes={() => props.modifyLikes(el.name, 'decrease', category)}
                  increaseLikes={() => props.modifyLikes(el.name, 'increase', category)}
                />
              );
            })}
        </>
      );
    } else {
      return <p className="card__error">No Animals Found!</p>;
    }
  }

  return (
    <>
      <section className="category-header">
        <h2 className="category-title">{category}</h2>
        <SearchBar searchHandler={props.searchHandler} />
      </section>
      <section className="cards-wrap">
        <div className="cards">{displayCards(props.zoo[category].filter((el) => el.name.toLowerCase().includes(props.search.toLowerCase())).length)}</div>
      </section>
    </>
  );
}

export default CategoryPage;
