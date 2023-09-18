import { TwitterOutlined } from '@ant-design/icons';
import { Avatar, Image } from "antd";
import { AvatarColumn, CardBodyRow, CardHeaderRow, CardRow, ContactColumn, Designation, Name, RatingIcon, RatingRow, SocialIconColumn } from "./styledComponents";

const TestimonialCard = ({ data }: any) => {

    return (
        <>
            <CardRow>
                <CardHeaderRow justify={'space-between'}>
                    <AvatarColumn span={3}>
                        <Avatar icon={<Image src={data?.avatar} preview={false} />} />
                    </AvatarColumn>
                    <ContactColumn span={17}>
                        <Name>{data?.username}</Name>
                        <Designation>{data?.platform_handle}</Designation>
                    </ContactColumn>
                    <SocialIconColumn span={3}>
                        <TwitterOutlined />
                    </SocialIconColumn>
                    <RatingRow>
                        <RatingIcon defaultValue={5} value={4} count={5} allowClear />
                    </RatingRow>
                </CardHeaderRow>
                <CardBodyRow>
                    {data?.description}
                    <Image src={data?.post_image} preview={false} />
                </CardBodyRow>
            </CardRow>
        </>
    )
}

export { TestimonialCard };

