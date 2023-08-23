import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SignOut from "@/components/SignIn/SignOut";
import { UserContext } from "@/lib/context";
import { Container, Flex } from "@chakra-ui/react";
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
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
        minH="100vh"
      >
        <RecordData />
        <SignOut />
      </Flex>
    </Container>
  );
};

export default Dashboard;
