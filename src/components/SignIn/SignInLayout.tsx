import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type SignInLayoutProps = {
  heading: string;
  subheading: string;
  children: ReactNode;
};
const SignInLayout = ({ heading, subheading, children }: SignInLayoutProps) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        flexShrink: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 16,
        paddingBottom: 8,
        boxShadow: "lg",
      }}
    >
      <Flex
        flex={1}
        direction="column"
        justify={"center"}
        w={{ base: "384px", md: "330px" }}
      >
        <Box mb={10}>
          <Heading as="h1" size="xl" mb={6}>
            {heading}
          </Heading>
          <Heading as="h2" size="md" fontWeight="normal">
            {subheading}
          </Heading>
        </Box>
        {children}
      </Flex>
    </main>
  );
};

export default SignInLayout;
