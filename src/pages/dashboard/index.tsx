import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SignOut from "@/components/SignIn/SignOut";
import { UserContext } from "@/lib/context";
import { Container } from "@chakra-ui/react";
import RecordData from "@/components/RecordData";

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
      <RecordData />
    </Container>
  );
};

export default Dashboard;
