import { Flex, HStack, RadioGroup, useRadioGroup } from "@chakra-ui/react";
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
  const [ species, setSpecies ] = useState('Osprey');

  const handleCheck = (value: string) => {
    setSpecies(value);
    console.log(value)
  }
  
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'Osprey',
    onChange: handleCheck,
  })

  return (
    <HStack>
      <RadioGroup>
        {speciesList.map((e, index) => {
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
                {...getRadioProps({ value: e.speciesName })}
              />
            </Flex>
           );
        })}
      </RadioGroup>
    </HStack>
    );
  };

  export default SelectSpecies;
