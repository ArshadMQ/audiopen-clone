import { Col } from 'antd'
import { FooterLeftColumn, FooterRightColumn, FooterRow, Links, VerticalDivider } from './styledComponents'

const Footer = () => {
    return (
        <FooterRow>
            <FooterLeftColumn span={12}>
                <Col><Links>&copy; Nicheless Inc.</Links></Col>
                <VerticalDivider type='vertical' orientation={'center'} />
                <Col><Links>built by @louispereira</Links></Col>
            </FooterLeftColumn>
            <FooterRightColumn span={12}>
                <Col><Links>FAQs</Links></Col>
                <Col><Links>privacy policy</Links></Col>
                <Col><Links>terms of use</Links></Col>
            </FooterRightColumn>
        </FooterRow>
    )
}

export { Footer }

