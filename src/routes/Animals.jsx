import Card from "../components/Card.jsx";

function Animals({ dataset, search, searchHandler, removeCard, modifyLikes }) {
  function displayCards(length) {
    if (length > 0) {
      return (
        <>
          {dataset
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, "animals")} decreaseLikes={() => modifyLikes(item.name, "decrease", "animals")} increaseLikes={() => modifyLikes(item.name, "increase", "animals")} />;
            })}
        </>
      );
    } else {
      return <p className="card__error">No Animals Found!</p>;
    }
  }

  return (
    <section className="cards-wrap" placeholder="Search...">
      <input type="text" id="search" onChange={searchHandler} placeholder="Search..." />
      <div className="cards">{displayCards(dataset.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length)}</div>
    </section>
  );
}

export default Animals;
