
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div>
      <nav>
        <div>
          <NavLink to="/kozni-tvrdonova/" end>Domů</NavLink>
          <NavLink to="/kozni-tvrdonova/sluzbyacenik" end>Služby & Ceník</NavLink>
          <NavLink to="/kozni-tvrdonova/kontakt" end>Kontakt</NavLink>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App
