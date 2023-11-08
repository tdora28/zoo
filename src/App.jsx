import { useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import { animals } from './animalList.js';
import { birds } from './animalList.js';

// console.log(animals);

function App() {
  const [zoo, setZoo] = useState(animals);
  const [zoo2, setZoo2] = useState(birds);

  const removeCard = (name, data) => {
    const correctZoo = data === 'animals' ? zoo : zoo2;

    const updateZoo = correctZoo.filter((item) => {
      return item.name !== name;
    });

    if (data === 'animals') {
      setZoo(updateZoo);
    } else {
      setZoo2(updateZoo);
    }
  };

  const modifyLikes = (name, operation, data) => {
    const correctZoo = data === 'animals' ? zoo : zoo2;

    const updateZoo = correctZoo.map((item) => {
      if (item.name === name && operation === 'increase') {
        item.likes++;
      }
      if (item.name === name && operation === 'decrease') {
        item.likes--;
      }
      return item;
    });

    if (data === 'animals') {
      setZoo(updateZoo);
    } else {
      setZoo2(updateZoo);
    }
  };

  return (
    <>
      <Header />
      <section className="showcase">
        <h2 className="showcase__title">Animals</h2>
        <div className="cards">
          {zoo.map((item) => {
            return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'animals')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'animals')} increaseLikes={() => modifyLikes(item.name, 'increase', 'animals')} />;
          })}
        </div>
        <h2 className="showcase__title">Birds</h2>
        <div className="cards">
          {zoo2.map((item) => {
            return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'birds')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'birds')} increaseLikes={() => modifyLikes(item.name, 'increase', 'birds')} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
