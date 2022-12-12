import { Outlet } from "react-router-dom";
import './styles/app.css'

function App() {  
 
  return (
    <div className="App"  >
      <header className="text-center p-4 text-dark">
        <h1>MIJN RPG</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
