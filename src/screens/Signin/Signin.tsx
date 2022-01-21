import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Button } from "@src/components/Button";
import { Input } from "@src/components/Input";

import brandImg from "@assets/brand.png";

import {
  Brand,
  Container,
  Content,
  Title,
  ForgotPasswordLable,
  ForgotPasswordButton,
} from "./Style";

export function Signin() {
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
          />

          <Input placeholder="Senha" type="secondary" secureTextEntry />

          <ForgotPasswordButton>
            <ForgotPasswordLable>Forgot your password?</ForgotPasswordLable>
          </ForgotPasswordButton>

          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
