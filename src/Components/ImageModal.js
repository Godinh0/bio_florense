import React from 'react';
import { Modal } from 'antd';
import '../App.css'; 

const ImageModal = ({ isVisible, onClose, imageSrc }) => {
  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width="80vw"
      className="transparentModal" // Add this class to apply your custom styles
      bodyStyle={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={imageSrc} style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </Modal>
  );
};

export default ImageModal;
