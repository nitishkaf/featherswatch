import { useCurrentUser } from "@/hooks/useCurrentUser";
import { firebaseSignOut, signInWithGoogle } from "@/lib/firebase";

export default function Home() {
  const { user } = useCurrentUser();
  return (
    <>
      {user ? (
        <div>
          <h1>Hi {user.displayName}</h1>
          <button onClick={firebaseSignOut}>sign out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Login</button>
      )}
    </>
  );
}
