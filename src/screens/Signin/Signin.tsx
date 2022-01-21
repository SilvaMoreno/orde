import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import brandImg from "@assets/brand.png";
import { useAuth } from "@hooks/auth";

import {
  Brand,
  Container,
  Content,
  Title,
  ForgotPasswordLable,
  ForgotPasswordButton,
} from "./Style";

export function Signin() {
  const { signIn, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("submit", email, password);
    signIn(email, password);
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Sign In</Title>

          <Input
            placeholder="Email"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />

          <ForgotPasswordButton>
            <ForgotPasswordLable>Forgot your password?</ForgotPasswordLable>
          </ForgotPasswordButton>

          <TouchableOpacity onPress={handleSubmit}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <Button
            title="Entrar"
            type="secondary"
            onPress={() => handleSubmit()}
            isLoading={isLoading}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
