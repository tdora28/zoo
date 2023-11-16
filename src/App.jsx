import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// import Header from './Header.jsx';
// import Card from './Card.jsx';
// import Footer from './Footer.jsx';
import { animals } from './animalList.js';
import { birds } from './animalList.js';

import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import Animals from './routes/Animals.jsx';
import Birds from './routes/Birds.jsx';

function App() {
  const [zoo, setZoo] = useState(animals);
  const [zoo2, setZoo2] = useState(birds);
  const [search, setSearch] = useState('');

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

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/animals',
          element: <Animals dataset={zoo} search={search} removeCard={removeCard} modifyLikes={modifyLikes} />,
        },
        {
          path: '/birds',
          element: <Birds dataset={zoo2} search={search} removeCard={removeCard} modifyLikes={modifyLikes} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* <Header search={searchHandler} />
      <section className='showcase'>
        <h2 className='showcase__title'>Animals</h2>
        <div className='cards'>
          {zoo
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'animals')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'animals')} increaseLikes={() => modifyLikes(item.name, 'increase', 'animals')} />;
            })}
        </div>
        <h2 className='showcase__title'>Birds</h2>

        <div className='cards'>
          {zoo2
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => {
              return <Card key={item.name} {...item} removeCard={() => removeCard(item.name, 'birds')} decreaseLikes={() => modifyLikes(item.name, 'decrease', 'birds')} increaseLikes={() => modifyLikes(item.name, 'increase', 'birds')} />;
            })}
        </div>
      </section>
      <Footer /> */}
    </>
  );
}

export default App;
