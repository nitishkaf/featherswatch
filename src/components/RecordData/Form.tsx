import { Button, Flex, Progress, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Form = ({ onClose }: any) => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(10);

  const handleForward = () => {
    setStep(step + 1);
    setProgress(progress + 10);
  };

  const handleBackward = () => {
    setStep(step - 1);
    setProgress(progress - 10);
  };

  return (
    <>
      <Progress size="xs" value={progress} />
      <form></form>
      <Flex
        w={"80%"}
        gap={4}
        bottom="4"
        position="fixed"
        justifyContent="space-between"
      >
        <Button
          w={"100%"}
          onClick={() => {
            if (step === 1) {
              onClose();
              toast({
                title: "Data collection cancelled.",
                description: "You can start again at any time.",
                status: "warning",
                duration: 3000,
                isClosable: true,
              });
            } else {
              handleBackward();
            }
          }}
        >
          {step === 1 ? "Cancel" : "Back"}
        </Button>
        <Button
          w="100%"
          onClick={() => {
            if (step === 10) {
              onClose();
              toast({
                title: "Data collection complete.",
                description: "Thank you for your contribution!",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            } else {
              handleForward();
            }
          }}
        >
          {step === 10 ? "Submit" : "Next"}
        </Button>
      </Flex>
    </>
  );
};

export default Form;
