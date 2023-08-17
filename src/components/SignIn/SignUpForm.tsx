import { auth } from "@/lib/firebase";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  return (
    <FormControl>
      <Box mb={10}>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText>We&prime;ll never share your email</FormHelperText>
      </Box>
      <Box mb={10}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button
        w="100%"
        onClick={() => createUserWithEmailAndPassword(email, password)}
      >
        Sign Up
      </Button>
    </FormControl>
  );
};

export default SignUpForm;
