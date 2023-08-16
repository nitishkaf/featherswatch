import SignInForm from "@/components/SignIn/SignInForm";
import SignInLayout from "@/components/SignIn/SignInLayout";
import SignInWithGoogle from "@/components/SignIn/SignInWithGoogle";
import { Divider, Flex } from "@chakra-ui/react";

const SignIn = () => {
  return (
    <SignInLayout heading="Welcome" subheading="Sign in to your account">
      <Flex direction="column" gap={5}>
        <SignInWithGoogle />
        <Divider />
        <SignInForm />
      </Flex>
    </SignInLayout>
  );
};

export default SignIn;
