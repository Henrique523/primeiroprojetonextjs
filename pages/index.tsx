// import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/core";
import Divider from "../components/Divider";
import { GoMarkGithub } from "react-icons/go";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr  480px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
    "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="RocketSeat" />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <InputGroup>
          <InputLeftElement
            marginTop="5px"
            children={<Icon name="email" color="gray.600" />}
          />
          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="E-mail"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            marginTop="12px"
            children={<Icon name="lock" color="gray.600" />}
          />
          <Input
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            marginTop={2}
          />
          <InputRightElement
            marginTop="13px"
            children={
              <IconButton
                aria-label="Ver Senha"
                variant="ghost"
                variantColor="purple"
                icon={showPassword ? AiFillEye : AiFillEyeInvisible}
                onClick={() => setShowPassword(!showPassword)}
              />
            }
          />
        </InputGroup>
        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: "purple.500" }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop={6}
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          _hover={{ backgroundColor: "purple.600" }}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem uma conta?{" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
            Registre-se
          </Link>
        </Text>
        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: "purple.500" }}
          >
            <Box
              as={GoMarkGithub}
              size="5"
              color="white.300"
              marginRight="8px"
            />
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
