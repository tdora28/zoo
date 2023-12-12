import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { animals, birds, insects, fish } from "./animalList.js";

import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

function App() {
  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
    insects: insects,
    fish: fish,
  });
  const [search, setSearch] = useState("");

  const removeCard = (name, category) => {
    const updatedArr = zoo[category].filter((el) => {
      return el.name !== name;
    });
    setZoo({ ...zoo, [category]: updatedArr });
  };

  const modifyLikes = (name, operation, category) => {
    const updatedArr = zoo[category].map((el) => {
      if (el.name === name) {
        if (operation === "increase") {
          return { ...el, likes: el.likes + 1 };
        } else {
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });
    setZoo({ ...zoo, [category]: updatedArr });
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: <CategoryPage zoo={zoo} search={search} searchHandler={searchHandler} removeCard={removeCard} modifyLikes={modifyLikes} />,
        },
        {
          path: ":category/:name",
          element: <SinglePage zoo={zoo} />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
