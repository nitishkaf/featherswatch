/* eslint-disable react/jsx-key */

import { CheckboxGroup, Flex, VStack } from "@chakra-ui/react";
import Behavior from "@/components/Behavior/Behavior";

const behaviors = [
  {
    behaviorName: "Breeding Activity: Courtship",
    behaviorDescription:
      "This behavior involves two adult ospreys flying in circles around each other.",
    youtubeEmbed: [
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ukVLwegly3g?si=Xme7zaThiamlGsUi"
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "courtship",
  },
  {
    behaviorName: "Breeding Activity: Copulation",
    behaviorDescription:
      "This behavior involves two adult ospreys mating with each other, with the male on top of the female.",
    youtubeEmbed: [
      <iframe
        width="365"
        height="648"
        src="https://www.youtube.com/embed/3U-F8YVNtVU"
        title="Osprey copulation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "copulation",
  },
  {
    behaviorName: "Breeding Activity: Nest Building",
    behaviorDescription:
      "This behavior can be recognized by when the male brings various plant material to the nest location to build the nest.",
    youtubeEmbed: [
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fFaARTm7JwU?si=drbD0Et1bYweclfg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "nestBuilding",
  },
  {
    behaviorName: "Breeding Activity: Incubation",
    behaviorDescription:
      "This behavior can be recognized by when the female is sitting in a particular manner, indicating that she is sitting on eggs.",
    youtubeEmbed: [
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fjKBgBSr50I?si=MVOrdaQO0EPoUWZ3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "incubation",
  },
  {
    behaviorName: "Breeding Activity: Male Bringing Food to Female",
    behaviorDescription:
      "This behavior can be recognized by when the male brings fish to the female for her to consume.",
    youtubeEmbed: [
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RJPWuSug1uM?si=1VFiKMpIhiptD8TY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "foodBringing",
  },
  {
    behaviorName: "Breeding Activity: Adult Feeding Young",
    behaviorDescription:
      "This behavior can be recognized by when the female regurgitates the fish she has eaten into the mouths of her offspring.",
    youtubeEmbed: [
      <iframe
        width="365"
        height="648"
        src="https://www.youtube.com/embed/-mY3XRXGgQM"
        title="Osprey Dad Brings in Fish: Mom Gets Busy Feeding Babies!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>,
    ],
    id: "feeding",
  },
  {
    behaviorName: "Other Behaviors (Please describe later)",
    behaviorDescription: "Please describe the behaviors you observed on the page for notes. Selecting this means there were behaviors observed that were not listed above.",
    youtubeEmbed: [],
    id: "other",
  },
];

const Observations1 = () => {
  return (
    <VStack>
      <CheckboxGroup>
        {behaviors.map((e, index) => {
          return (
            <Flex key={index}>
              <Behavior
                behaviorName={e.behaviorName}
                behaviorDescription={e.behaviorDescription}
                youtubeEmbed={e.youtubeEmbed}
              />
            </Flex>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};

export default Observations1;
