import { Outlet } from "react-router-dom";
// import React, {useEffect} from "react";




function App() {  

  // const navigate = useNavigate()

  // eslint-disable-next-line 
  // useEffect(() => {navigate('/start')},[])
 
  return (
    <div className="App">
      <header className="text-center bg-secondary p-4 text-white">
        <h1>Ryan's RPG</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
