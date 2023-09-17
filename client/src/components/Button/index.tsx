import { CustomButton } from './styledComponents'

interface IButtonProps {
    shape?: string
    size?: string
    text: string
    bgColor?: string
    textColor?: string
    onClick?: () => void
    style?: React.CSSProperties
    htmlType?: any
}

const Button = (props: IButtonProps) => {
    const { shape = 'round', size = 'default', text, bgColor, textColor, onClick, ...rest } = props;
    return (
        <CustomButton type={'secondary'} shape={shape} size={size} bgColor={bgColor} textColor={textColor} onClick={onClick} {...rest}>
            {text}
        </CustomButton>
    )
}

export { Button }
