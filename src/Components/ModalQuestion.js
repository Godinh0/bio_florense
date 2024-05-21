import { Button, Modal } from "antd";

const ModalQuestion = ({
  textConfirm,
  message,
  onCancel,
  correctAnswer,
  onConfirm,
  show,
  children,
  noExam,
  unclosable
}) => {
  return (
    <>
      <Modal
        className="modalButtons"
        centered
        open={show}
        onCancel={onCancel ? onCancel : () => {}}
        footer={null}
        closable={unclosable?false:true}
      >
        {message}
        {children}
        {correctAnswer && (noExam ? (
          ""
        ) : (
          <p
            style={{
              color: "green",
            }}
          >
            Você liberou um novo exame
          </p>
        ))}
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          <Button
            key="2"
            className="btnConfirm"
            style={{
              color: correctAnswer ? "" : "#B8B3B3",
              borderColor: correctAnswer ? "" : "#B8B3B3",
              cursor: correctAnswer ? "normal" : "pointer",
              backgroundColor: correctAnswer ? "" : "white",
            }}
            type="primary"
            onClick={onConfirm}
            disabled={!correctAnswer}
          >
            {textConfirm}
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default ModalQuestion;
