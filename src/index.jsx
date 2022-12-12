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
import GameBoard from './routes/GameBoard';
import Duel from './routes/actions/Duel';
import Shop from './routes/actions/Shop'
import Board from './routes/actions/Board'

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
        children: [
          {
            path: "/game-board/duel",
            element: <Duel />,
          },
          {
            path: "/game-board/board",
            element: <Board />,
          },
          {
            path: "/game-board/shop",
            element: <Shop />,
          },
        ]
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
