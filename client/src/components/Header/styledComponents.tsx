import { Row } from "antd";
import styled from "styled-components";

export const HeaderRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 100%;
  padding: 20px 0;
`;