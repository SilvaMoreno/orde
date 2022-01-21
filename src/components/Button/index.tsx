import React from "react";
// import { RectButtonProps } from "react-native-gesture-handler";
import { TouchableOpacityProps } from "react-native";
import { Container, Load, Title, TypeProps } from "./style";

type Props = TouchableOpacityProps & {
  type?: TypeProps;
  title: string;
  isLoading?: boolean;
};

export function Button({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Container type={type} disabled={isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
}
