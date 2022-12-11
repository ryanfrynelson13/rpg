import { Outlet } from "react-router-dom";




function App() {  
 
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
