import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import GameInit from "./routes/GameInit";
import ChooseCharacter from './routes/ChooseCharacter';
import GameBoard from './routes/actions/GameBoard';
import Duel from './routes/actions/Duel';
import Shop from './routes/actions/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GameInit  />,
      },
      {
        path: "/game-init",
        element: <ChooseCharacter  />,
      },
      {
        path: "/game-board",
        element: <GameBoard  />,
      },
      {
        path: "/game-board/duel",
        element: <Duel />,
      },
      {
        path: "/game-board/shop",
        element: <Shop />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
