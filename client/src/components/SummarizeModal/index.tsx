import React, { useState } from 'react'
import { TagButtonRow, Date, FooterButtonsRow, ModalContainer, Summary, TagButton, Title } from './styledComponents';
import { Col, Image, Row } from 'antd';

interface ISummarizeModalProps {
    isSummarizing: any
    setIsSummarizing: any
    summarizeData?: any
    setSummarizeData?: object
}

const SummarizeModal = (props: ISummarizeModalProps) => {
    const { isSummarizing, setIsSummarizing, setSummarizeData, summarizeData } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsSummarizing(true);
    };

    const handleOk = () => {
        setIsSummarizing(false);
    };

    const handleCancel = () => {
        setIsSummarizing(false);
    };

    function audioHandler() {

    }

    console.log(summarizeData);

    return (
        <ModalContainer
            open={isSummarizing}
            onOk={handleOk}
            onCancel={handleCancel}
            width={700}
            closeIcon={false}
            centered
        >
            <Title>{summarizeData?.title}</Title>
            <Date>{summarizeData?.timestamp}</Date>
            <Summary>{summarizeData?.description}</Summary>
            <Image onClick={audioHandler} width={80} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457579641x789442577218450600%2FRecord%2520Note.png?w=96&h=96&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
            <TagButtonRow>
                <TagButton>+ add tag</TagButton>
            </TagButtonRow>
            <FooterButtonsRow>
                <Col><Image width={22} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687598001568x788745454124092400%2Fnew%2520delete.png?w=32&h=32&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                </Col>
                <Col><Image width={22} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457615180x934154101628462700%2Fcopy.png?w=32&h=32&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                </Col>
                <Col><Image width={22} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457624652x591242225889318400%2Fsave.png?w=32&h=32&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                </Col>
            </FooterButtonsRow>
        </ModalContainer>
    )
}

export { SummarizeModal }
