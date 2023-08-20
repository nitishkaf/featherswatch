import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useNumberInput,
} from "@chakra-ui/react";

type CounterProps = {
  type: string;
};

function Counter({ type }: CounterProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 10,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <InputGroup>
      <InputLeftElement>
        <Button {...inc}>+</Button>
      </InputLeftElement>
      <Input {...input} />
      <InputRightElement>
        <Button {...dec}>-</Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Counter;
