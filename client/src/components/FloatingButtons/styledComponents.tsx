import { Row } from "antd";
import styled from "styled-components";

export const FloatingButtonsRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 98%;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;
