import Modal from "../../atoms/modal/modal";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import { useEffect, useState } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
};

const ErrorModal: React.FC<ConfirmModalProps> = ({ isOpen }) => {
  const [isOpenState, setIsOpenState] = useState(false);

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  const onCancel = () => {
    setIsOpenState(false);
  };

  return (
    <Modal
      isOpen={isOpenState}
      onClose={onCancel}
      className="max-w-md m-auto px-5"
    >
      <header className="relative">
        <Typography
          variant="body"
          label="Error !"
          className="font-montserrat-bold"
        />
      </header>
      <main className="mt-4">
        <Typography
          variant="small"
          label="Ocurrio un error, por favor intenta de nuevo"
          className="font-montserrat"
        />
      </main>
      <footer className="flex justify-end mt-4">
        <Button
          label="Volver"
          onClick={onCancel}
          theme="secondary"
          outlined
          isLink
          className="font-montserrat-semibold border-0"
        />
      </footer>
    </Modal>
  );
};

export default ErrorModal;
