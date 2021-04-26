import React from "react";
//import { Button, Modal } from "react-bootstrap";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ModalComp = (props) => {
  const { title, text, link, show, onHide } = props;
  const [open, setOpen] = React.useState(false);
  return (
    // <Modal
    //   show={show}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton onClick={onHide}>
    //     <Modal.Title className="ml-auto">{title}</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `<p>${text}</p>`,
    //       }}
    //     />
    //     <a href={link} target="_blank" rel="noopener noreferrer">
    //       Github
    //     </a>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComp;
