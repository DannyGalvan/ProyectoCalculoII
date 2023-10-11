import { Button, Modal } from 'flowbite-react';
import { Row } from '../grid/Row';
import { Col } from '../grid/Col';
import Fail from '/assets/Failed.png';

interface SuccessProps {
  open: boolean;
  setOpen: () => void;
}

export const Failed = ({ open, setOpen }:SuccessProps) => {
  return (
    <Modal show={open}>
      <Modal.Body className="rounded-2xl bg-secondary p-4 shadow-[5px_5px_2px_0px_#B46767]">
        <Row>
          <Col md="6" className="flex justify-center">
            <img src={Fail} alt="correct" className="w-[50%] md:w-full" />
          </Col>
          <Col md="6" className="flex flex-col items-center justify-center">
            <h2 className="text-center font-chilanka text-3xl text-[#B46767] md:text-6xl">
              ¡Respuesta Incorrecta!
            </h2>
            <Button
              color=""
              className="rounded-full bg-container shadow-[5px_5px_2px_0px_#B46767]"
              onClick={setOpen}
            >
              <p className="px-2 font-chilanka text-xl text-[#B46767]">
                Siguiente
              </p>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
