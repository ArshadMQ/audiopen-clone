
import { Divider, Form, Input, Typography } from 'antd';
import styled from 'styled-components';

export const SignUpHeading = styled(({ screen, ...other }: any) => (
  <Typography.Paragraph {...other} />
))`
  font-family: Fraunces;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0 !important;
  color: rgba(61, 63, 84, 1);
`;

export const AccountPrompt = styled(({ screen, ...other }: any) => (
  <Typography.Paragraph {...other} />
))`
  font-family: DM Sans;
  font-size: 15px;
  font-weight: 275;
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

export const ForgotPassword = styled(({ screen, ...other }: any) => (
  <Typography.Link {...other} />
))`
  font-family: DM Sans;
  text-decoration: underline !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: black !important;
  margin: 14px 0;
`;

export const CustomForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.ant-form-vertical {
    width: 100% !important;
  }
  .ant-form-item {
    width: 65% !important;
    margin-bottom: 15px;
  }
  .ant-input {
    border-radius: 10px !important;
  }
`;

export const FormInput = styled(({ screen, ...other }: any) => <Input {...other} />)`
  & .ant-input {
    border-radius: 40px !important;
    font-size: 16px;
    font-weight: 400;
    text-align: center !important;
    opacity: 1;
    align-self: center;
    color: rgba(61, 63, 84, 0.6);
  }
`;

export const CustomDivider = styled(({ screen, ...other }: any) => (
  <Divider {...other} />
))`
  & .ant-divider-horizontal {
    width: 18% !important;
    min-width: 0 !important;
  }
`; 