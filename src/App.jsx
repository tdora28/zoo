import { useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function App() {
  const [zoo, setZoo] = useState([
    {
      id: 1,
      type: 'animal',
      name: 'fox',
      rating: 100,
      img: 'https://images.pexels.com/photos/158340/fuchs-wild-animal-predator-animal-world-158340.jpeg',
    },
    {
      id: 2,
      type: 'animal',
      name: 'rabbit',
      rating: -5,
      img: 'https://images.pexels.com/photos/2476390/pexels-photo-2476390.jpeg',
    },
    {
      id: 3,
      type: 'animal',
      name: 'panda',
      rating: 84,
      img: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg',
    },
    {
      id: 4,
      type: 'bird',
      name: 'sparrow',
      rating: 0,
      img: 'https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg',
    },
    {
      id: 5,
      type: 'animal',
      name: 'cat',
      rating: 28,
      img: 'https://images.pexels.com/photos/7149465/pexels-photo-7149465.jpeg',
    },
  ]);

  return (
    <>
      <Header />
      <div className="cards">
        {zoo.map((item) => {
          return <Card key={item.id} name={item.name} rating={item.rating} img={item.img} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
