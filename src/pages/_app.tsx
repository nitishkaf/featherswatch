import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContext } from "@/lib/context";
import { useUserData } from "@/lib/hooks";
import "../styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const userData: any = useUserData();
  return (
    <ChakraProvider>
      <UserContext.Provider value={userData}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}
