import { Col, Image } from 'antd'
import { FloatingButtonsRow } from './styledComponents'

interface IFloatingButtons {
    onClick?: () => void
}

const FloatingButtons = (props: IFloatingButtons) => {
    const { onClick } = props;
    return (
        <FloatingButtonsRow justify={'space-between'} align={"bottom"}>
            <Col>
                <Image width={30} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457555441x811805973635273400%2FUpload%2520notes.png?w=48&h=48&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
            </Col>
            <Col>
                <Image onClick={onClick} width={80} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457579641x789442577218450600%2FRecord%2520Note.png?w=96&h=96&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
            </Col>
            <Col>
                <Image width={30} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457562387x955603684411346400%2FUpload%2520text.png?w=48&h=48&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
            </Col>
        </FloatingButtonsRow>
    )
}

export { FloatingButtons }

