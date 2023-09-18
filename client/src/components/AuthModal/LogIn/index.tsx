import { useState } from 'react';
import { Button } from '../..';
import {
  AccountPrompt,
  CustomForm,
  ForgotPassword,
  FormInput,
  PolicyTerms,
  SignUpHeading,
} from './styledComponents';
import { Checkbox, Form } from 'antd';
import { useAuth } from '../../../context/auth.context';
import { LOGIN, SIGNUP } from '../../../services/api/auth.service';
import { setLocalStorage } from '../../../utils/commonMethods';
import { useNavigate } from 'react-router-dom';

const LoginIn = (props: any) => {
  const { setOpenLogIn, setIsModalOpen } = props;
  const [form] = Form.useForm();
  const [logInCheck, setLogInCheck] = useState(true);
  const [error, setError] = useState('');
  const { updateUserDetails } = useAuth();
  const navigate = useNavigate();
  const onFinish = async () => {
    const formData: any = {
      email: form.getFieldValue('email')?.trim(),
      password: form.getFieldValue('password')?.trim(),
      confirmPassword: form.getFieldValue('confirmPassword')?.trim(),
    };

    if (logInCheck) {
      LOGIN(formData)
        .then(response => {
          setLocalStorage('token', response?.data?.token);
          setIsModalOpen((prev: any) => !prev);
          setOpenLogIn((prev: any) => !prev);
          setLogInCheck((prev: any) => !prev);
          setError('');
          updateUserDetails((prev: any) => {
            return {
              ...prev,
              token: response?.data?.token,
            };
          });
        })
        .catch(response => setError(response?.data?.error));
    } else {
      if (formData.password != formData.confirmPassword) {
        return setError("Passwords doesn't match.");
      }
      const response = await SIGNUP(formData)
        .then(({ data }) => {
          setLogInCheck(true);
          setIsModalOpen(true);
          setError('');
          data;
        })
        .catch(error => {
          setError(''), error;
        });
      console.log(response);
    }
  };

  return (
    <>
      <SignUpHeading>{logInCheck ? 'Log in' : 'Sign up'}</SignUpHeading>
      <CustomForm form={form} layout={'vertical'} onFinish={onFinish}>
        <AccountPrompt style={{ color: 'red' }}>{error}</AccountPrompt>
        <Form.Item name="email">
          <FormInput placeholder="Email" required />
        </Form.Item>
        <Form.Item name="password">
          <FormInput placeholder="Password" type="password" required />
        </Form.Item>
        {!logInCheck ? (
          <>
            <Form.Item name="confirmPassword">
              <FormInput
                placeholder="Confirm Password"
                type="password"
                required
              />
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ margin: '2px 0', paddingLeft: '50px' }}
            >
              <Checkbox
                defaultChecked={true}
                style={{ marginBottom: '0', paddingBottom: '0' }}
              >
                Remember me
              </Checkbox>
            </Form.Item>
          </>
        )}
        <Form.Item style={{ marginBottom: '-5px', paddingLeft: '20px' }}>
          <Button
            text={logInCheck ? 'Log In' : ' Sign up'}
            textColor="white"
            style={{ width: '180px' }}
            htmlType="submit"
          />
        </Form.Item>
      </CustomForm>
      {logInCheck ? (
        <ForgotPassword>Forgot Password</ForgotPassword>
      ) : (
        <PolicyTerms>
          by signing up, you agree to AudioPen's Privacy Policy and Terms of
          Use.
        </PolicyTerms>
      )}
      {/* <CustomDivider /> */}
      <hr style={{ width: '80px', margin: '1px 0' }} />
      {logInCheck ? (
        <AccountPrompt>Don't have an account?</AccountPrompt>
      ) : (
        <AccountPrompt>Already have an account?</AccountPrompt>
      )}
      <Button
        text={logInCheck ? 'Sign up' : 'Login'}
        bgColor="transparent"
        textColor="rgba(61, 63, 84, 1)"
        style={{ width: '180px' }}
        onClick={() => setLogInCheck(p => !p)}
      />
    </>
  );
};

export default LoginIn;
