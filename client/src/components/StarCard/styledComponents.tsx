import styled from 'styled-components';
import { Row, Typography, Image, Col } from 'antd'

export const ProductRow = styled(({ screen, ...other }: any) => (<Row {...other} />))`
    width: 100%;
    border: 1px solid rgba(255, 97, 84, 1);
    border-radius: 12px;
    padding: 10px 18px;
    background-color: #fff;
`;

export const ProductCol = styled(({ screen, ...other }: any) => (<Col {...other} />))`
    /* line-height: .01; */
`;

export const MedalIcon = styled(({ screen, ...other }: any) => (<Image {...other} />))`
    width: 30px;
`;

export const ProductTitle = styled(({ screen, ...other }: any) => (<Typography.Paragraph {...other} />))`
    font-weight: 700;
    color: rgba(255, 97, 84, 1);
    font-size: 11px;
    margin-bottom: 0 !important;
    font-family: 'Inter', sans-serif;
`;

export const ProductText = styled(({ screen, ...other }: any) => (<Typography.Text {...other} />))`
    width: 100%;
    color: rgba(255, 97, 84, 1);
    font-weight: 800;
    font-size: 16px;
    line-height: 5px;
    font-family: 'Inter', sans-serif;
`;


