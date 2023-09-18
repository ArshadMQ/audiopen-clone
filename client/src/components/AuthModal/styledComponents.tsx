import { Modal } from "antd";
import styled from "styled-components";

export const ModalContainer = styled(({ screen, ...other }: any) => (<Modal {...other} />))`
    .ant-modal-content {
        padding: 30px;
        width: 100%;
        border-radius: 30px;

        .ant-modal-body {
            display: grid;
            place-items: center;
            gap: 24px;
        }

        .ant-modal-footer {
            display: none;
        }
    } 

`;
