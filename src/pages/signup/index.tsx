import Link from "next/link";
import SignInLayout from "@/components/SignIn/SignInLayout";
import SignInWithGoogle from "@/components/SignIn/SignInWithGoogle";
import SignUpForm from "@/components/SignIn/SignUpForm";
import { Center, Divider, Flex, Text } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <SignInLayout heading="Get started" subheading="Create a new account">
      <Flex direction="column" gap={5}>
        <SignInWithGoogle />
        <Divider />
        <SignUpForm />
        <Center>
          <Text my={8} fontSize={"12px"} color="gray.500">
            Have an account?{" "}
            <Link
              href="/signin"
              style={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              Sign In
            </Link>
          </Text>
        </Center>
      </Flex>
    </SignInLayout>
  );
};

export default SignUp;
