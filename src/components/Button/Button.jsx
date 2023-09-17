import { StyledButton } from "./Button.styled";

export const Button = ({ children, ...props }) => {
    return <StyledButton type='button' {...props}> {children}</StyledButton>;
  };