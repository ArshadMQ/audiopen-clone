import { Image } from 'antd'
import { AuthModal } from '../../components'
import YoutubePlayer from '../../components/YoutubePlayer'
import { BrandDescription, BrandName, ButtonRow, DemoContainer } from './styledComponents'

const Demo = () => {
    return (
        <DemoContainer>
            <Image width={45} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457579641x789442577218450600%2FRecord%2520Note.png?w=96&h=96&auto=compress&dpr=1&fit=max' />
            <BrandName>AudioPen</BrandName>
            <BrandDescription>Watch a demo of how AudioPen works.</BrandDescription>
            <YoutubePlayer embedId='FdWlhW-9Es4' />
            <ButtonRow><AuthModal /></ButtonRow>
        </DemoContainer>
    )
}

export default Demo
