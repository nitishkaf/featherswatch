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
}: SpeciesSelectProps, radioProps: any) {

    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } = 
      useRadio(radioProps);

    return (
      <chakra.label { ...htmlProps } cursor='pointer'>
      <input 
        { ...getInputProps({}) }
        hidden 
        // id={ speciesID }
        // value={ speciesID }
        // type="radio"
      />
        <Box
          { ...getRadioProps() }
          w={130}
          p={5}
          rounded='8px'
          _focus={{
            boxShadow: 'outline',
          }}
          _checked={{
            borderColor: '#FFBA68',
            borderWidth: '3px',
            fontWeight: 'bold'
          }}
        >
          <Image src={ speciesImage } rounded='full' {...getLabelProps()} />
          <Text>
            { speciesName }
          </Text>
        </Box>
      </chakra.label>
    )
}

export default Species;
