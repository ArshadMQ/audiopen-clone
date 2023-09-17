import { Anchor, Button, Row, Typography } from "antd";
import styled from "styled-components";

export const HeroRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 100%;
  text-align: center;
  flex-direction: column;
  height: 80vh;
`;

export const BrandName = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  position: relative;
  font-family: 'Fraunces', sans-serif;
  font-size: 48px !important;
  font-weight: 600 !important;
  color: rgba(61, 63, 84, 1) !important;
  display: grid;
  place-items: center;

  &::after {
    position: absolute;
    content: '';
    top: 85px;
    width: 25px;
    height: 5px;
    background-color: rgba(255, 92, 10, 1);
    border-radius: 2px;
  }
`;

export const BrandTitle = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  color: rgba(61, 63, 84, 1) !important;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700 !important;
  font-size: 28px !important;
  letter-spacing: 1px;

  span {
    font-style: italic;
    font-weight: normal;
  }
`;

export const BrandDescription = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  color: rgba(61, 63, 84, 1) !important;
  font-family: 'DM Sans', sans-serif;
  font-weight: normal !important;
  font-size: 17px !important;
  letter-spacing: 1px;
  line-height: 25px !important;
`;

export const ButtonRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  margin: 40px 10px;
`;

export const TestimonialRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  background: radial-gradient(50% 50% at 50% 50%, #FF5C0A 0%, #F7F0F0 50%, #F7F0F0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const ReadMoreRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 90px 0 120px 0;
`;

export const AudioContainer = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const AudioBox = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  margin-top: 40px;
  width: 460px;
  height: 230px;
  background: linear-gradient(63.14deg, rgba(255, 92, 10, 0.75) 0%, #FF5C0A 50%, rgba(255, 92, 10, 0.85) 100%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Timer = styled(({ screen, ...other }: any) => (<Typography.Title {...other} />))`
  font-size: 32px;
  font-family: 'Fraunces', sans-serif;
  color: #fff !important;
`;

export const WaveContainer = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  display: flex;
  justify-content: center;
`;

export const PlayStopButton = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -40px;
  width: inherit;
`;

export const CornerButtonsContainer = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 0 30px;
  margin-top: 24px;
`;

export const TranscribingContainer = styled(({ screen, ...other }: any) => (<Row {...other} />))`
  display: grid;
  place-items: center;
  row-gap: 24px;
`;

export const TranscribingText = styled(({ screen, ...other }: any) => (<Typography.Text {...other} />))`
  font-family: DM Sans;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  color: rgba(247, 240, 240, 1);
`;

export const CancelLink = styled(({ screen, ...other }: any) => (<a {...other} />))`
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: underline;
  color: rgba(247, 240, 240, 1);
  
  &:hover, :visited, :active {
    color: rgba(247, 240, 240, 1);
  }
`;