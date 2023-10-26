import { NavLink } from 'react-router-dom';
import { Dropdown, Navbar as Nav } from 'flowbite-react';
import Logo from '/logo/UMG.png';

interface NavbarProps {
  toggleDerived: () => void;
  toggleIntegrals: () => void;
}

export const Navbar = ({ toggleDerived, toggleIntegrals }: NavbarProps) => {
  return (
    <Nav
      rounded
      className="w-full bg-four p-1.5 shadow-[8px_10px_6px_3px_#827E6A] lg:w-3/4"
    >
      <Nav.Brand href="#/">
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
      <Nav.Collapse className="font-chilanka">
        <NavLink to="/BasicIntegrals" className="NavLink">
          Basicas
        </NavLink>
        <NavLink to="/IntegralsBySubsitution" className="NavLink">
          Por Sustitución
        </NavLink>
        <NavLink to="/IntegralByParts" className="NavLink">
          Por Partes
        </NavLink>
        <span className="NavLink">
          <Dropdown label="Formularios" inline>
            <Dropdown.Item onClick={toggleDerived}>Derivadas</Dropdown.Item>
            <Dropdown.Item onClick={toggleIntegrals}>Integrales</Dropdown.Item>
          </Dropdown>
        </span>
        <span className="NavLink">
          <Dropdown label="Tutoriales" inline>
            <Dropdown.Item><NavLink to="/BasicIntegrals/Tutorial">Basicas</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/IntegralByParts/Tutorial">Por Partes</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/IntegralsBySubsitution/Tutorial">Por Sustitucion</NavLink></Dropdown.Item>
          </Dropdown>
        </span>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
