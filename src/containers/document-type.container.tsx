import { useState } from "react";
import { DocumentTypeServices } from "../services/document-type.services";
import { RequestCreateDocumentType } from "../types/document-type/document-type.interface";
import LayoutTemplate from "../components/templates/home-template/home-template";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import ModalFormRegisterDocumentType from "../components/templates/register-document-type/modal-form-register-document-type";

const DocumentTypeContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const documentTypeServices = new DocumentTypeServices();

  const createDocumentType = async (
    cod: string,
    nombre: string,
    descripcion: string
  ) => {
    try {
      await documentTypeServices.createDocumentType({
        cod,
        nombre,
        descripcion,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateDocumentType) => {
    createDocumentType(values.cod, values.nombre, values.descripcion);
  };

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Tipo de Documento
        </Typography>
        <TextIcon
          onClick={() => setIsOpen(true)}
          styles="min-w-[100px] gap-2"
          label="Nuevo"
          labelSpacing="widest"
          variant="small"
          labelColor="text-gray-700"
          family="bold"
          icon="add"
          iconSize="20"
          iconColor={myColors["danger-light"]}
        />
      </header>
      <section className="bg-gray-3 opacity-40 w-[98%] h-[1.5px] my-5 rounded-lg"></section>
      <main className="mt-6">
        <ModalFormRegisterDocumentType
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        />
      </main>
    </LayoutTemplate>
  );
};

export default DocumentTypeContainer;
