import { Typography } from "antd";
import styled from "styled-components";

export const AuthHeading = styled(({ screen, ...other }: any) => (
  <Typography.Paragraph {...other} />
))`
  font-family: Fraunces;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0 !important;
  color: rgba(61, 63, 84, 1);
`;

export const PolicyTerms = styled(({ screen, ...other }: any) => (
  <Typography.Paragraph {...other} />
))`
  font-family: DM Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  width: 220px;
  color: rgba(61, 63, 84, 0.6);
`;
