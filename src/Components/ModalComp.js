import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComp = (props) => {
  const { title, text, link, show, onHide } = props;
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title className="ml-auto">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          dangerouslySetInnerHTML={{
            __html: `<p>${text}</p>`,
          }}
        />
        <a href={link} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
