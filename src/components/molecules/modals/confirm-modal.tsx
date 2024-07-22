import { useEffect, useState } from "react";
import Modal from "../../atoms/modal/modal";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import Icon from "../../atoms/icon/icon";

type ConfirmModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  isLoading,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} className="max-w-md m-auto px-5">
      <header className="relative">
        <Typography
          variant="body"
          label="Confirmación"
          className="font-montserrat-bold"
        />
      </header>
      <main className="mt-4">
        <Typography
          variant="small"
          label="¿Estás apunto de ingresar a esta mesa?"
          className="font-montserrat"
        />
      </main>
      <footer className="flex justify-between mt-4">
        <Button
          label="Confirmar"
          onClick={onConfirm}
          isLoading={isLoading}
          theme="primary"
          loadingTheme="primary"
          outlined
          isLink
          className="font-montserrat-semibold border-0 w-28"
        />
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

export default ConfirmModal;
