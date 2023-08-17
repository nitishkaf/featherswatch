import SignInLayout from "@/components/SignIn/SignInLayout";
import SignInWithGoogle from "@/components/SignIn/SignInWithGoogle";
import SignUpForm from "@/components/SignIn/SignUpForm";
import { Divider, Flex } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <SignInLayout heading="Get started" subheading="Create a new account">
      <Flex direction="column" gap={5}>
        <SignInWithGoogle />
        <Divider />
        <SignUpForm />
      </Flex>
    </SignInLayout>
  );
};

export default SignUp;
