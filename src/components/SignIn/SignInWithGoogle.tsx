import { signInWithGoogle } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";

const SignInWithGoogle = () => {
  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
};

export default SignInWithGoogle;
