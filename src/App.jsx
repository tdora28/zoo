import { useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import { animals } from './animalList.js';

// console.log(animals);

function App() {
  const [zoo, setZoo] = useState(animals);

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
          return <Card key={item.name} {...item} decreaseLikes={() => modifyLikes(item.name, 'decrease')} increaseLikes={() => modifyLikes(item.name, 'increase')} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
