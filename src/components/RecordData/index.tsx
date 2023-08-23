import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Form from "./Form";

const RecordData = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Button w="100%" onClick={onOpen}>
        Record Data
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        closeOnOverlayClick={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Audubon Bird Data Collection</Center>
          </ModalHeader>
          <ModalBody>
            <Form onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecordData;
