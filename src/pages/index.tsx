import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Osprey from "../../public/osprey.jpg";

export default function Home() {
  const router = useRouter();
  return (
    <Container maxW="100%">
      <VStack mt={100}>
        <Box w="300px">
          <Image
            src={Osprey}
            alt="osprey"
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>
        <Heading
          fontSize="64px"
          color="#AEC3B0"
          fontFamily={"Wix Madefor Display"}
        >
          Discover Feathers Watch
        </Heading>
        <Button
          w={{ base: "100%", md: "300px" }}
          onClick={() => router.push("/signin")}
        >
          Explore App
        </Button>
      </VStack>
    </Container>
  );
}
