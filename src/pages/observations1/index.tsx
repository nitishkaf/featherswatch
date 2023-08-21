import { CheckboxGroup, VStack } from "@chakra-ui/react";
import Behavior from "@/components/Behavior/Behavior";

const behaviors = [
    {
      behaviorName: "Breeding Activity: Courtship",
      behaviorDescription: "This behavior involves two adult ospreys flying in circles around each other.",
      youtubeEmbed: '',
    },
    {
      behaviorName: "Breeding Activity: Copulation",
      behaviorDescription: "This behavior involves two adult ospreys mating with each other, with the male on top of the female.",
      youtubeEmbed: '',
    },
    {
      behaviorName: "Breeding Activity: Nest Building",
      behaviorDescription: "This behavior can be recognized by when the male brings various plant material to the nest location to build the nest.",
      youtubeEmbed: '',
    },
    {
      behaviorName: "Breeding Activity: Incubation",
      behaviorDescription: "This behavior can be recognized by when the female is sitting in a particular manner, indicating that she is sitting on eggs.",
      youtubeEmbed: '',
    },
    {
      behaviorName: "Breeding Activity: Male Bringing Food to Female",
      behaviorDescription: "This behavior can be recognized by when the male brings fish to the female for her to consume.",
      youtubeEmbed: '',
    },
    {
      behaviorName: "Breeding Activity: Adult Feeding Young",
      behaviorDescription: "This behavior can be recognized by when the female regurgitates the fish she has eaten into the mouths of her offspring.",
      youtubeEmbed: '',
    },
    {
        behaviorName: "Other Behaviors (Please describe later)",
        behaviorDescription: "Please describe the behaviors you observed when you ",
        youtubeEmbed: '',
    },
];

const Observations1 = () => {
    return (
      <VStack>
        <CheckboxGroup>
          {behaviors.map((e, index) => {
            return (
              <Behavior 
                behaviorName={ e.behaviorName }
                behaviorDescription={ e.behaviorDescription }
                key={ index }
                youtubeEmbed={ e.youtubeEmbed }
              />
            );
          })}
        </CheckboxGroup>
      </VStack>
    );
  };
  
  export default Observations1;
  