import { Col, Divider, Row, Typography } from "antd";
import styled from "styled-components";

export const FooterRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
    margin-bottom: 50px;
    margin-top: 20px;
    padding: 0 20px;
`;

export const FooterLeftColumn = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    display: flex;
    gap: 10px;
    font-weight: 400;
`;

export const FooterRightColumn = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    font-weight: 400;
`;

export const Links = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
`;

export const VerticalDivider = styled(({ screen, ...other }: any) => (<Divider {...other} />))`
    height: 100%;
`;