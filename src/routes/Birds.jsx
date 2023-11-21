import Card from "../components/Card.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Birds({ dataset, search, searchHandler, removeCard, modifyLikes }) {
  function displayCards(length) {
    if (length > 0) {
      return (
        <>
          {dataset
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, "birds")} decreaseLikes={() => modifyLikes(item.name, "decrease", "birds")} increaseLikes={() => modifyLikes(item.name, "increase", "birds")} />;
            })}
        </>
      );
    } else {
      return <p className="card__error">No Birds Found!</p>;
    }
  }

  return (
    <section className="cards-wrap">
      <SearchBar searchHandler={searchHandler} />
      <div className="cards">{displayCards(dataset.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length)}</div>
    </section>
  );
}

export default Birds;
