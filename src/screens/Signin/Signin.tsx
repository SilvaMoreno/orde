import { Button } from "@src/components/Button";
import { Input } from "@src/components/Input";
import React from "react";

import { Container } from "./Style";

export function Signin() {
  return (
    <Container>
      <Input
        placeholder="Email"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Senha" type="secondary" secureTextEntry />
      <Button title="Entrar" type="secondary" />
    </Container>
  );
}
