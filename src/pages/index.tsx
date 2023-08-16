import { useCurrentUser } from "@/hooks/useCurrentUser";
import { firebaseSignOut, signInWithGoogle } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const { user } = useCurrentUser();
  return (
    <>
      {user ? (
        <div>
          <h1>Hi {user.displayName}</h1>
          <Button onClick={firebaseSignOut}>sign out</Button>
        </div>
      ) : (
        <Button onClick={signInWithGoogle}>Login</Button>
      )}
    </>
  );
}
