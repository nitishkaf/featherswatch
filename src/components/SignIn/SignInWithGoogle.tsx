import { signInWithGoogle } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";

const SignInWithGoogle = () => {
  return <Button onClick={signInWithGoogle}>Continue with Google</Button>;
};

export default SignInWithGoogle;
