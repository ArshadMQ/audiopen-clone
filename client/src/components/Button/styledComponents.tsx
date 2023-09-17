import { Button } from "antd";
import styled from "styled-components";

export const CustomButton = styled(({ screen, ...other }: any) => (<Button {...other} />))`
  margin: 0 8px;
  background-color: ${({ bgColor }) => bgColor ?? 'rgba(255, 92, 10, 1)'};
  box-shadow: 0px 2px 16px -6px rgba(61, 63, 84, 0.6);
  padding: 22px 24px !important;
  border-radius: 60px;
  font-family: 'Fraunces', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ textColor }) => textColor ?? 'black'};
  letter-spacing: .6px;

  &:hover {
    opacity: .9;
  }
`;