import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
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
          element: <Animals dataset={zoo} search={search} searchHandler={searchHandler} removeCard={removeCard} modifyLikes={modifyLikes} />,
        },
        {
          path: '/birds',
          element: <Birds dataset={zoo2} search={search} searchHandler={searchHandler} removeCard={removeCard} modifyLikes={modifyLikes} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
