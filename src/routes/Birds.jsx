import Card from '../components/Card.jsx';

function Birds({ dataset, search, removeCard, modifyLikes }) {
  return (
    <div className="cards">
      {dataset
        .filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((item) => {
          return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'birds')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'birds')} increaseLikes={() => modifyLikes(item.name, 'increase', 'birds')} />;
        })}
    </div>
  );
}

export default Birds;
