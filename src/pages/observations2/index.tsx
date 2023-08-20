import Counter from "@/components/Counter/Counter";
import { Box, Text, VStack } from '@chakra-ui/react'

const Observations2 = () => {
    return(
        <VStack>
            <Box>
                <Text as='b'>
                    Number of Adults 
                </Text>
                <Counter type="adults"></Counter>
            </Box>
            <Box>
                <Text as='b'>
                    Number of Nestlings 
                </Text>
                <Counter type="nestlings"></Counter>
            </Box>
            <Box>
                <Text as='b'>
                    Number of Fledglings 
                </Text>
                <Counter type="fledglings"></Counter>
            </Box>
        </VStack>        
    );
};

export default Observations2;
