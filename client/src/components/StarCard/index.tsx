import { Col } from 'antd';
import MedalImage from "../../assets/images/medal.svg";
import { MedalIcon, ProductCol, ProductRow, ProductText, ProductTitle } from './styledComponents';

const StarCard = () => {
  return (
    <>
      <ProductRow align={'middle'}>
        <Col span={4}>
          <MedalIcon src={MedalImage} preview={false} width={22} />
        </Col>
        <ProductCol span={20}>
          <ProductTitle>PRODUCT HUNT</ProductTitle>
          <ProductText>#1 Product of the Day</ProductText>
        </ProductCol>
      </ProductRow>
    </>
  )
}

export { StarCard };

