
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>Kožní ordinace Tvrdoňová</h1>
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
