import { Checkbox, Flex, Text } from "@chakra-ui/react";

type BehaviorProps = {
  behaviorName: string;
  behaviorDescription: string;
  youtubeEmbed: JSX.Element[];
};

const Behavior = ({
  behaviorName,
  behaviorDescription,
  youtubeEmbed,
}: BehaviorProps) => {
  return (
    <Flex direction="column">
      <Checkbox as="b">{behaviorName}</Checkbox>
      <div>
        {youtubeEmbed.map((embed, index) => (
          <div key={index}>{embed}</div>
        ))}
      </div>
      <Text>{behaviorDescription}</Text>
    </Flex>
  );
};

export default Behavior;
