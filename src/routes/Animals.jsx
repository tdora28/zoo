import Card from '../components/Card.jsx';

function Animals({ dataset, search, searchHandler, removeCard, modifyLikes }) {
  return (
    <section className="cards-wrap" placeholder="Search...">
      <input type="text" id="search" onChange={searchHandler} />
      <div className="cards">
        {dataset
          .filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => {
            return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'animals')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'animals')} increaseLikes={() => modifyLikes(item.name, 'increase', 'animals')} />;
          })}
      </div>
    </section>
  );
}

export default Animals;
