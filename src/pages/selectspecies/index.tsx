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
  const [selectedSpecies, setSelectedSpecies] =
    useState('');
  
  const handleCheck = (value: string) => {
    setSelectedSpecies(value);
    console.log(selectedSpecies);
  }

  const { value, getRootProps, getRadioProps, setValue } = useRadioGroup({
    defaultValue: selectedSpecies,
    onChange: handleCheck,
  })

  return (
        <HStack {...getRootProps()}>
          <Text>The selected species is { selectedSpecies }</Text>
          <RadioGroup
            onChange={(e) => setSelectedSpecies(e)}
            value={selectedSpecies}
          >
            {speciesList.map((e, index) => {
              const isSelected = selectedSpecies === e.id;
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
                    isSelected={ isSelected }
                  />
                </Flex>
                );
            })}
          </RadioGroup>  
        </HStack>
    );
  };

  export default SelectSpecies;
