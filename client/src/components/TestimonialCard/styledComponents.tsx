import { Col, Rate, Row, Typography } from "antd";
import styled from "styled-components";

export const CardRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 370px;
    padding: 15px;
    border-radius: 16px;
    background-color: #fff;
    margin-top: 26px;
`;

export const CardHeaderRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
`;

export const SocialIconColumn = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    display: flex;
    justify-content: end;
    align-items: flex-start;
`;

export const AvatarColumn = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RatingRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
    margin: 6px 0;
`;

export const CardBodyRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
    margin: 6px 0;
    font-family: "DM Sans" sans-serif;
    color: rgba(74, 76, 95, 1);
    line-height: 24px;
`;

export const ContactColumn = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    /* margin-top: 5px; */
    font-family: "DM Sans" sans-serif;
    color: rgba(74, 76, 95, 1);
`;

export const Name = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: "DM Sans" sans-serif;
    color: rgba(74, 76, 95, 1) !important;
    margin-bottom: 0 !important;
    font-weight: 600;
`;

export const Designation = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: "DM Sans" sans-serif;
    color: rgba(96, 99, 123, 1) !important;
    margin-bottom: 0 !important;
`;

export const RatingIcon = styled(({ screen, ...other }: any) => (<Rate {...other} />))`
    li {
        margin-inline-end: 2px !important;
    }
    
    .ant-rate-star-second {
        svg{
            fill: rgba(255, 92, 10, 1);
        }
    }
`;