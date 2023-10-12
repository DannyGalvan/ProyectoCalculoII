import {NavLink} from 'react-router-dom';
import { Navbar as Nav } from 'flowbite-react';
import Logo from '/logo/UMG.png';

export const Navbar = () => {
  return (
    <Nav
      rounded
      className='mb-6 w-full bg-four p-1.5 shadow-[8px_10px_6px_3px_#827E6A] lg:w-3/4'
    >
      <Nav.Brand
        href="#/"
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-20 sm:h-24"
          src={Logo}
        />
        <span className="self-center whitespace-nowrap font-could text-xl font-semibold dark:text-white">
          Menú
        </span>
      </Nav.Brand>
      <Nav.Toggle />
      <Nav.Collapse className='font-chilanka'>       
        <NavLink to="/BasicIntegrals" className="NavLink">
          Integrales Basicas
        </NavLink>
        <NavLink to="/IntegralsBySubsitution" className="NavLink">
          Integrales por Sustitución
        </NavLink>
        <NavLink to="/IntegralByParts" className="NavLink">
          Integrales por Partes
        </NavLink>
      </Nav.Collapse>
    </Nav>
  )
}

export default Navbar
