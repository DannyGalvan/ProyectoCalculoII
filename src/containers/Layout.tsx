import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { BACKGROUNDS } from '../config/backgound';
import { Button, Modal } from 'flowbite-react';
import derived from '/forms/derivadas.png';
import integrals from '/forms/integrales.png';
import { Col } from '../components/grid/Col';

const Layout = ({ children }: { children: ReactNode }) => {
  const route = useLocation();
  const [showDerived, setShowDerived] = useState(false);
  const [showIntegrals, setShowIntegrals] = useState(false);

  const toggleShowDerived = () => setShowDerived(!showDerived);
  const toggleShow = () => setShowIntegrals(!showIntegrals);

  useEffect(() => {
    document
      .querySelector('body')
      ?.style.setProperty(
        'background-color',
        BACKGROUNDS[route.pathname.replace(/\/\d+$/, '')] || '#C6C09C'
      );
  }, [route.pathname]);

  return (
    <div className="w-full">
      <Navbar toggleDerived={toggleShowDerived} toggleIntegrals={toggleShow} />
      <main className='py-6'>{children}</main>
      <Modal show={showDerived} onClose={toggleShowDerived}>
        <article className='flex flex-col items-center p-4'>
          <img src={derived} />
          <Col xs='12' md='6' className='mx-10 mt-2'>
            <Button color='failure' onClick={toggleShowDerived} fullSized>Cerrar</Button>
          </Col>
        </article>
      </Modal>
      <Modal show={showIntegrals} onClose={toggleShow}>
        <article className='flex flex-col items-center p-4'>
          <img src={integrals} className='h-[70vh] w-full sm:w-[80%]' />
          <Col xs='12' md='6' className='mx-10 mt-2'>
            <Button color='failure' onClick={toggleShow} fullSized>Cerrar</Button>
          </Col>
        </article>
      </Modal>
    </div>
  );
};

export default Layout;
