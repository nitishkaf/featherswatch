import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SignOut from "@/components/SignIn/SignOut";
import { UserContext } from "@/lib/context";
import { Container } from "@chakra-ui/react";

const Dashboard = () => {
  const userData = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (!userData.user) {
      router.push("/");
    }
  }, [userData.user]);
  return (
    <Container>
      <SignOut />
    </Container>
  );
};

export default Dashboard;
