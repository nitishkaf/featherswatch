import SignInForm from "@/components/SignIn/SignInForm";
import SignInLayout from "@/components/SignIn/SignInLayout";
import SignInWithGoogle from "@/components/SignIn/SignInWithGoogle";
import { useUserData } from "@/lib/hooks";
import { Center, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn = () => {
  const { user } = useUserData();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <SignInLayout heading="Welcome" subheading="Sign in to your account">
      <Flex direction="column" gap={5}>
        <SignInWithGoogle />
        <Divider />
        <SignInForm />
        <Center>
          <Text my={8} fontSize={"12px"} color="gray.500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              style={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              Sign Up Now
            </Link>
          </Text>
        </Center>
      </Flex>
    </SignInLayout>
  );
};

export default SignIn;
