import { Col, Image } from 'antd'
import { StarCard } from '..'
import { HeaderRow } from './styledComponents'

const Header = () => {
    return (
        <HeaderRow justify={'space-between'}>
            <Col><Image width={30} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457518334x769583463020433400%2FAccount.png?w=48&h=48&auto=compress&dpr=1&fit=max' /></Col>
            <Col span={4}><StarCard /></Col>
            <Col><Image width={30} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457526927x901253347049433700%2FSettings.png?w=48&h=48&auto=compress&dpr=1&fit=max' /></Col>
        </HeaderRow>
    )
}

export { Header }

