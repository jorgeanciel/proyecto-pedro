import { useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";
import ModalFormRegisterCompany from "../components/templates/register-company/modal-form-register-company";
import { CompanyServices } from "../services/company.services";
import { RequestCreateCompany } from "../types/company/company.interface";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";

const CompanyContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const companyServices = new CompanyServices();

  const createCompany = async (
    nombre: string,
    descripcion: string,
    direccion: string,
    telefono: string,
    ruc: string,
    responsable: string
  ) => {
    try {
      await companyServices.createCompany({
        nombre,
        descripcion,
        direccion,
        telefono,
        ruc,
        responsable,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateCompany) => {
    createCompany(
      values.nombre,
      values.descripcion,
      values.direccion,
      values.telefono,
      values.ruc,
      values.responsable
    );
  };

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Empresa
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
        <ModalFormRegisterCompany
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

export default CompanyContainer;
