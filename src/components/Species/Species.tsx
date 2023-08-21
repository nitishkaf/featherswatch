import { Box, chakra, Flex, Image, Text, useRadio } from "@chakra-ui/react";

type SpeciesSelectProps = {
  speciesName: string;
  speciesImage: string;
  speciesDisabled: boolean;
  speciesID: string;
};

function Species({
  speciesName,
  speciesImage,
  speciesDisabled,
  speciesID,
}: SpeciesSelectProps) {

  const SpeciesRadio = (props: any) => {
    const { ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } = 
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
      <input 
        {...getInputProps({})} 
        hidden 
        id={ speciesID }
        disabled={ speciesDisabled }
      />
        <Box
          {...getRadioProps()}
          display='flex' 
          alignItems='top'
          borderColor={ state.isChecked ? '#FFBA68' : 'transparent' }
          borderWidth={ state.isChecked ? '3px' : '0' }
          fontWeight={ state.isChecked ? 'bold' : 'normal' }
          w={50}
          p={5}
          rounded='8px'
          _focus={{
            boxShadow: 'outline'
          }}
        >
          <Image src={ speciesImage } rounded='full' {...getLabelProps()} />
          <Text>
            { speciesName }
          </Text>
        </Box>
      </chakra.label>
    )
  };

  return (
      <SpeciesRadio /> 
  );
}

export default Species;
