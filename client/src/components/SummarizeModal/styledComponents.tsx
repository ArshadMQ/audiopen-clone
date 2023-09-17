import { Button, Modal, Row, Typography } from "antd";
import styled from "styled-components";

export const ModalContainer = styled(({ screen, ...other }: any) => (<Modal {...other} />))`
    .ant-modal-content {
        padding: 30px;
        border-radius: 30px;
        background: linear-gradient(48.69deg, rgba(61, 63, 84, 0.9) 0%, #3D3F54 100%);
        
        
        .ant-modal-body {
            display: grid;
            place-items: center;
            gap: 16px;
            color:#fff
        }
        
        .ant-modal-footer {
            display: none;
        }
    } 

`;

export const Title = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: Fraunces;
    font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
`;

export const Date = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: Fraunces;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(247, 240, 240, 1);
    margin-top: -46px;
`;

export const Summary = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-family: DM Sans;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(247, 240, 240, 1);
`;

export const TagButtonRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    display: flex;
    justify-content: start;
    width: 100%;
`;

export const TagButton = styled(({ screen, ...other }: any) => (<Button {...other} />))`
    background: transparent;
    color: #fff;
    border: 1px dashed #fff;
    border-radius: 60px;
    font-family: DM Sans;
    font-size: 11px;
    line-height: 18px;
    text-align: center;
`;

export const FooterButtonsRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`;