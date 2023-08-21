import { Flex, RadioGroup, useRadioGroup } from "@chakra-ui/react";
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
  {
    id: "responsibility1",
    speciesName: "Responsibility Bird 1",
    speciesImage: "",
    speciesDisabled: true,
  },
  {
    id: "responsibility2",
    speciesName: "Responsibility Bird 2",
    speciesImage: "",
    speciesDisabled: true,
  },
  {
    id: "responsibility3",
    speciesName: "Responsibility Bird 3",
    speciesImage: "",
    speciesDisabled: true,
  },
  {
    id: "responsibility4",
    speciesName: "Responsibility Bird 4",
    speciesImage: "",
    speciesDisabled: true,
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
    <Flex 
      direction="row"
    >
      <RadioGroup>
        {speciesList.map((e, index) => {
          return (
            <Flex 
              key={index}
              align="top"
              direction="column"
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
    </Flex>
    );
  };

  export default SelectSpecies;