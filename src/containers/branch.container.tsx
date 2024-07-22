import { useState } from "react";
import { BranchServices } from "../services/branch.services";
import { RequestCreateBranch } from "../types/branch/branch.interface";
import LayoutTemplate from "../components/templates/home-template/home-template";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import ModalFormRegisterBranch from "../components/templates/register-branch/modal-form-register-branch";

const BranchContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const branchServices = new BranchServices();

  const createBranch = async (
    nombre: string,
    direccion: string,
    telefono: string
  ) => {
    try {
      await branchServices.createBranch({
        nombre,
        direccion,
        telefono,
      });
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateBranch) => {
    createBranch(values.nombre, values.direccion, values.telefono);
  };

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Sucursal
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
        <ModalFormRegisterBranch
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

export default BranchContainer;
