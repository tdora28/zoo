import { useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
// import { animals } from './animalList.js';
import { birds } from './animalList.js';

// console.log(animals);

function App() {
  const [zoo, setZoo] = useState(birds);

  const removeCard = (name) => {
    const updateZoo = zoo.filter((item) => {
      return item.name !== name;
    });
    setZoo(updateZoo);
  };

  const modifyLikes = (name, operation) => {
    const updateZoo = zoo.map((item) => {
      if (item.name === name && operation === 'increase') {
        item.likes++;
      }
      if (item.name === name && operation === 'decrease') {
        item.likes--;
      }
      return item;
    });
    setZoo(updateZoo);
  };

  return (
    <>
      <Header />
      <div className="cards">
        {zoo.map((item) => {
          return <Card key={item.name} {...item} removeCard={() => removeCard(item.name)} decreaseLikes={() => modifyLikes(item.name, 'decrease')} increaseLikes={() => modifyLikes(item.name, 'increase')} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
