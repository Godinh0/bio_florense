import { Button, Modal } from "antd";

const ModalButtons = ({
  textCancel,
  textConfirm,
  message,
  onCancel,
  onConfirm,
  show,
}) => {
  return (
    <>
      <Modal
        className="modalButtons"
        centered
        open={show}
        onCancel={onCancel ? onCancel : () => {}}
        closable={false}
        footer={null}
      >
        {message}
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {onCancel && (
            <Button key="1" className="btnCancel" onClick={onCancel}>
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
