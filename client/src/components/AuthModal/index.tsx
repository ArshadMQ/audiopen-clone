import React, { useState } from 'react';
import { Button, Home } from '..';
import { ModalContainer } from './styledComponents';
import LoginIn from './LogIn';

interface IModalProps {
  isModalOpen?: any
}

const AuthModal: React.FC = (props: IModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(props?.isModalOpen ?? false);
  const [openLogIn, setOpenLogIn] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenLogIn(!openLogIn);
  };

  return (
    <>
      <Button text="sign up / login" textColor="white" onClick={showModal} />
      <ModalContainer
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={420}
        closeIcon={false}
        centered
      >
        {openLogIn ? <LoginIn setIsModalOpen={setIsModalOpen} setOpenLogIn={setOpenLogIn} /> : <Home setOpenLogIn={setOpenLogIn} setIsModalOpen={setIsModalOpen} />}
      </ModalContainer>
    </>
  );
};


export { AuthModal };

