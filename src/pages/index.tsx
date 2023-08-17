import { UserContext } from "@/lib/context";
import { firebaseSignOut, signInWithGoogle } from "@/lib/firebase";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Home() {
  const { user, username } = useContext(UserContext);
  const router = useRouter();
  console.log("username", user);
  return (
    <>
      <Button onClick={() => router.push("/signin")}>Sign In Page</Button>
      <Button onClick={() => router.push("/signup")}>Sign Up Page</Button>

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
