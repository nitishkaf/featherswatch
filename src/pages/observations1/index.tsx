import { CheckboxGroup, VStack } from "@chakra-ui/react";
import Behavior from "@/components/Behavior/Behavior";

const behaviors = [
    {
      behaviorName: "Breeding Activity: Courtship",
      behaviorDescription: "This behavior involves two adult ospreys flying in circles around each other.",
      youtubeEmbed: [ <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Dm_y2t8Welc?si=IPhhM-tDLq7PfY_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> ],
      id: "courtship",
    },
    {
      behaviorName: "Breeding Activity: Copulation",
      behaviorDescription: "This behavior involves two adult ospreys mating with each other, with the male on top of the female.",
      youtubeEmbed: [<div></div>],
      id: "copulation",
    },
    {
      behaviorName: "Breeding Activity: Nest Building",
      behaviorDescription: "This behavior can be recognized by when the male brings various plant material to the nest location to build the nest.",
      youtubeEmbed: [<div></div>],
      id: "nestBuilding",
    },
    {
      behaviorName: "Breeding Activity: Incubation",
      behaviorDescription: "This behavior can be recognized by when the female is sitting in a particular manner, indicating that she is sitting on eggs.",
      youtubeEmbed: [<div></div>],
      id: "incubation",
    },
    {
      behaviorName: "Breeding Activity: Male Bringing Food to Female",
      behaviorDescription: "This behavior can be recognized by when the male brings fish to the female for her to consume.",
      youtubeEmbed: [<div></div>],
      id: "foodBringing",
    },
    {
      behaviorName: "Breeding Activity: Adult Feeding Young",
      behaviorDescription: "This behavior can be recognized by when the female regurgitates the fish she has eaten into the mouths of her offspring.",
      youtubeEmbed: [<div></div>],
      id: "feeding",
    },
    {
      behaviorName: "Other Behaviors (Please describe later)",
      behaviorDescription: "Please describe the behaviors you observed when you ",
      youtubeEmbed: [<div></div>],
      id: "other",
    },
];

const Observations1 = () => {
    return (
      <VStack>
        <CheckboxGroup>
          {behaviors.map((e) => {
            return (
              <Behavior 
                behaviorName={ e.behaviorName }
                behaviorDescription={ e.behaviorDescription }
                key={ e.id }
                youtubeEmbed={ ...e.youtubeEmbed }
              />
            );
          })}
        </CheckboxGroup>
      </VStack>
    );
  };
  
  export default Observations1;
  