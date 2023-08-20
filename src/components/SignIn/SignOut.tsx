import { firebaseSignOut } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";

const SignOut = () => {
  return <Button onClick={firebaseSignOut}>Sign Out</Button>;
};

export default SignOut;
