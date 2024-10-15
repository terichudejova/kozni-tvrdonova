
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect, useRef } from 'react'


function App() {

  //Hamburger Menu
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Zavření hamburger menu při kliknutí na obrazovku
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  //Pozadí pro wide navbar při scrollování
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false)
    };
  }

      // Přidání event listeneru při načtení komponenty
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Čištění event listeneru při odchodu z komponenty
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className='outerBox'>
          <nav className={`navbarBox ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div ref={navRef} className={`nav-links ${isOpen ? 'show' : ''}`}>
              <div className="left">
                <a><img id="logo" src="images/logo_noBG.png"/></a>
              </div>
              <div className="right">
                <NavLink to="/kozni-tvrdonova/" end className={`navLink ${isScrolled ? "scrolled" : ""}`} onClick={toggleMenu}>Domů</NavLink>
                <NavLink to="/kozni-tvrdonova/sluzbyacenik" className={`navLink ${isScrolled ? "scrolled" : ""}`} onClick={toggleMenu}>Služby & Ceník</NavLink>
                <NavLink to="/kozni-tvrdonova/kontakt" className={`navLink ${isScrolled ? "scrolled" : ""}`} onClick={toggleMenu}>Kontakt</NavLink>
              </div>
            </div>
          </nav>
        <Outlet/>
    </div>
  )
}

export default App
