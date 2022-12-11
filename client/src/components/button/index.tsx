import React from "react";
import styled from "styled-components";

interface props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, type }: props) => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background: var(--color-secondary);
  color: #fff;
  padding: 1rem 1rem;
  text-transform: capitalize;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-secondary-200);
  }
`;

export default Button;
