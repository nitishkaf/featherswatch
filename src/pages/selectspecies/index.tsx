import { Flex, HStack, RadioGroup, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import Species from "@/components/Species/Species";
import { useState } from 'react';

const speciesList = [
  {
    id: "osprey",
    speciesName: "Osprey",
    speciesImage: "",
    speciesDisabled: false,
  },
  {
    id: "bluebird",
    speciesName: "Eastern Bluebird",
    speciesImage: "",
    speciesDisabled: false,
  },
]; 

const SelectSpecies = () => {
  const handleCheck = (value: string) => {
    console.log(value);
  };
  
  const { value, getRootProps, getRadioProps, setValue } = useRadioGroup({
    onChange: handleCheck,
    // value: 
  })

  return (
        <Stack {...getRootProps()}>
          <Text>
              The selected species is { value }
          </Text>
          <HStack>
            {speciesList.map((e, index) => {
                // const radio = getRadioProps({ value: e.id })
                return (
                <Flex 
                    key={index}
                    align="top"
                    direction="row"
                    justify="center"
                >
                <Species
                    speciesName={ e.speciesName }
                    speciesImage={ e.speciesImage }
                    speciesDisabled={ e.speciesDisabled }
                    speciesID={ e.id }
                    {...getRadioProps({ value: e.id })}
                />
                </Flex>
                );
            })}
          </HStack>  
        </Stack>
    );
  };

  export default SelectSpecies;
