import { Checkbox, Flex, Text } from '@chakra-ui/react'

type BehaviorProps = {
  behaviorName: string;
  behaviorDescription: string;
  youtubeEmbed: any[];
};

const Behavior = ({ behaviorName, behaviorDescription, youtubeEmbed }:BehaviorProps) => {
  return (
    <Flex direction="column">
      <Checkbox as="b">
        { behaviorName }
      </Checkbox>
      <Text>
        { youtubeEmbed }
      </Text>
      <Text>
        { behaviorDescription }
      </Text>
    </Flex>
  );
}

export default Behavior;