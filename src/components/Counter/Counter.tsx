import {
    Button,
    HStack,
    Input,
    useNumberInput
  } from '@chakra-ui/react'

  function HookUsage() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 0,
        max: 10
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <HStack maxW='100px'>
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    )
  }