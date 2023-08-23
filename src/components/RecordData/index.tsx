import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import Form from "./Form";
import { useState } from "react";

const RecordData = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [formStep, setFormStep] = useState(1);
  const [progress, setProgress] = useState(11);

  const handleForward = () => {
    setFormStep(formStep + 1);
    setProgress(progress + 11);
  };

  const handleBackward = () => {
    setFormStep(formStep - 1);
    setProgress(progress - 11);
  };

  return (
    <>
      <Button onClick={onOpen}>Record Data</Button>
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
            <Progress value={progress} isAnimated />
            <Form onClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" gap={4}>
              <Button
                w="100%"
                onClick={() => {
                  if (formStep == 1) {
                    onClose();
                  } else {
                    handleBackward();
                  }
                }}
              >
                Back
              </Button>
              <Button
                w="100%"
                onClick={() => {
                  if (formStep == 9) {
                    onClose();
                  } else {
                    handleForward();
                  }
                }}
              >
                {formStep == 9 ? "Submit" : "Next"}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecordData;
