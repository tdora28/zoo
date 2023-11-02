import { useState } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import { animals } from './animalList.js';

console.log(animals);

function App() {
  const [zoo, setZoo] = useState(animals);

  return (
    <>
      <Header />
      <div className='cards'>
        {zoo.map((item) => {
          return <Card key={item.name} name={item.name} likes={item.likes} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
