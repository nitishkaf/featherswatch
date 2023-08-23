import { firebaseSignOut } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";

const SignOut = () => {
  return (
    <Button w="100%" onClick={firebaseSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
