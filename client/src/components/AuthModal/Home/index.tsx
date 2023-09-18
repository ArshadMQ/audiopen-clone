import { Button } from '../..';
import { AuthHeading, PolicyTerms } from './styledComponents';

interface LoginProps {
  setOpenLogIn?: any;
  setIsModalOpen?: any;
}

const Home = (props: LoginProps) => {
  const { setOpenLogIn } = props;
  return (
    <>
      <AuthHeading>Sign up or Log in</AuthHeading>
      <Button
        text="sign in with Google"
        textColor="white"
        style={{ width: '250px' }}
      />
      <Button
        text="or sign up / log in with email"
        bgColor="transparent"
        textColor="rgba(61, 63, 84, 1)"
        style={{ width: '250px' }}
        onClick={() => setOpenLogIn((p: any) => !p)}
      />
      <PolicyTerms>
        by signing up, you agree to AudioPen's Privacy Policy and Terms of Use.
      </PolicyTerms>
    </>
  );
};

export { Home };

