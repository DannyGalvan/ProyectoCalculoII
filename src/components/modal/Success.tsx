import { Button, Modal } from 'flowbite-react';
import { Row } from '../grid/Row';
import { Col } from '../grid/Col';
import Correct from '/assets/Correct.png';

interface SuccessProps {
  open: boolean;
  setOpen: () => void;
}

export const Success = ({ open, setOpen }:SuccessProps) => {
  return (
    <Modal show={open}>
      <Modal.Body className="rounded-2xl bg-[#FFC98B] p-4 shadow-[5px_5px_2px_0px_#B47F43]">
        <Row>
          <Col md="6" className="flex justify-center">
            <img src={Correct} alt="correct" className="w-[50%] md:w-full" />
          </Col>
          <Col md="6" className="flex flex-col items-center justify-center">
            <h2 className="text-center font-chilanka text-3xl text-[#B47F43] md:text-6xl">
              ¡Respuesta Correcta!
            </h2>
            <Button
              color=""
              className="rounded-full bg-[#FFE9CF] shadow-[5px_5px_2px_0px_#B47F43]"
              onClick={setOpen}
            >
              <p className="px-2 font-chilanka text-xl text-[#B47F43]">
                Siguiente
              </p>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
