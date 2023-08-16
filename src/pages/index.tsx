import { UserContext } from "@/lib/context";
import { firebaseSignOut, signInWithGoogle } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

export default function Home() {
  const { user, username } = useContext(UserContext);
  console.log("username", user);
  return (
    <>
      {user ? (
        <div>
          <h1>Hi </h1>
          <Button onClick={firebaseSignOut}>sign out</Button>
        </div>
      ) : (
        <Button onClick={signInWithGoogle}>Login</Button>
      )}
    </>
  );
}
