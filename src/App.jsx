import { Outlet } from "react-router-dom";
// import React, {useEffect} from "react";

// let index = 0

// export const test = () => {
//    return {index}
// }

function App() {  

  // const navigate = useNavigate()

  // eslint-disable-next-line 
  // useEffect(() => {navigate('/start')},[])
 
  return (
    <div className="App" tabIndex={0}
  >
      <header className="text-center bg-secondary p-4 text-white">
        <h1>Mijn RPG</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
