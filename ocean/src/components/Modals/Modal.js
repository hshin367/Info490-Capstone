import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Modal, Button } from "antd";

const Modals = ({
  className,
  visible,
  children,
  title,
  confirmLoading,
  okText,
  cancelText,
  closeModal,
  destroyOnClose,
  onOk,
}) => {
  const [modalText, setModalText] = useState("");

  return (
    <>
      <ModalOverlay visible={visible} />
      {/* tabIndex set to -1 to prevent unneccessary keyboard focusing */}
      <Modal
        className={className}
        title={title}
        visible={visible}
        onCancel={closeModal}
        confirmLoading={confirmLoading}
        okText={okText}
        cancelText={cancelText}
        destroyOnClose={destroyOnClose}
        onOk={onOk}
      >
        {children}
      </Modal>
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

// Styled Components
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default Modals;
