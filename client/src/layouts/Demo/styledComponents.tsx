import { Row, Typography } from "antd";
import styled from "styled-components";

export const DemoContainer = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 100%;
  display: grid;
  place-items: center;
  align-content: center;
  height: 100dvh;
  background: radial-gradient(80% 70% at 50% 50%, #FF5C0A 0%, #F7F0F0 50%, #F7F0F0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const BrandName = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  position: relative;
  font-family: 'Fraunces', sans-serif;
  font-size: 27px !important;
  font-weight: 600 !important;
  color: rgba(61, 63, 84, 1) !important;
  margin-bottom: -12px !important;
`;

export const BrandDescription = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  color: rgba(61, 63, 84, 1) !important;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400 !important;
  font-size: 17px !important;
  margin-bottom: 40px !important;
`;

export const ButtonRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  margin-top: 40px;
`;