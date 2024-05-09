import { Button, Modal } from "antd";

const ModalButtons = ({
  textCancel,
  textConfirm,
  message,
  onCancel,
  onBack,
  onConfirm,
  show,
  closable
}) => {
  return (
    <>
      <Modal
        className="modalButtons"
        centered
        open={show}
        onCancel={onCancel ? onCancel : () => {}}
        closable={closable?true:false}
        footer={null}
        maskClosable={false}
      >
        {message}
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {textCancel && (
            <Button key="1" className="btnCancel" onClick={onBack}>
              {textCancel}
            </Button>
          )}

          <Button
            key="2"
            className="btnConfirm"
            type="primary"
            onClick={onConfirm}
          >
            {textConfirm}
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default ModalButtons;
