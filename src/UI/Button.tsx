import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import { primaryColor } from "../colors";

type ButtonVariant = "medium";

type ButtonProps = {
  variant: ButtonVariant;
  center?: boolean;
};

const heightButtonVariant = ({ variant }: ButtonProps) => match(variant)
  .with("medium", () => css`
    height: 2rem;
    width: initial;
  `)
  .exhaustive();

const centerButton = ({ center }: ButtonProps) => match(center)
  .with(true, () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `)
  .otherwise(() => css`
  `);

export const Button = styled.div`
  cursor: pointer;
  height: 100%;

  margin-left: 0.5rem;
  padding: 0.5rem;
  margin-top: -5px;
  box-shadow: 0 0 2px 0px black;
  background: ${primaryColor}aa;

  display: flex;
  align-items: center;

  background: #FFFFFFCC;
  border: 5px solid black;
  box-shadow: 0 -5px 0px 0px #00000066 inset;

  &:hover {
    background: #FFFFFFEE;
  }

  ${heightButtonVariant}
  ${centerButton}
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: initial;

  cursor: pointer;
  height: 100%;

  margin-left: 0.5rem;
  padding: 0.5rem;
  margin-top: -5px;
  box-shadow: 0 0 2px 0px black;
  background: ${primaryColor}aa;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #FFFFFFCC;
  border: 5px solid black;
  box-shadow: 0 -5px 0px 0px #00000066 inset;

  &:hover {
    background: #FFFFFFEE;
  }

  ${heightButtonVariant}
`;