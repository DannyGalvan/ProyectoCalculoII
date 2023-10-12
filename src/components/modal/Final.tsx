import { Button, Modal } from 'flowbite-react';
import { Row } from '../grid/Row';
import { Col } from '../grid/Col';
import Fin from '/assets/Final.png';
import { Link } from 'react-router-dom';

interface SuccessProps {
  open: boolean;
  setOpen: () => void;
  url: string;
}

export const Final = ({ open, setOpen, url }: SuccessProps) => {
  return (
    <Modal show={open}>
      <Modal.Body className="rounded-2xl bg-[#FFB284] p-4 shadow-[5px_5px_2px_0px_#DC6620]">
        <Row>
          <Col md="6" className="flex justify-center">
            <img src={Fin} alt="correct" className="w-[50%] md:w-full" />
          </Col>
          <Col md="6" className="flex flex-col items-center justify-center">
            <h2 className="text-center font-chilanka text-3xl text-[#DC6620] md:text-6xl">
              ¡Haz Finalizado el Problema!
            </h2>
            <Button
              color=""
              className="rounded-full bg-container shadow-[5px_5px_2px_0px_#DC6620]"
              onClick={setOpen}
            >
              <Link to={url} className="px-2 font-chilanka text-xl text-[#DC6620]">
                Siguiente
              </Link>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
