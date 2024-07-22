import { useEffect, useState } from "react";
import LayoutTemplate from "../components/templates/home-template/home-template";
import ModalFormRegisterCustomer from "../components/templates/resgister-customer/modal-form-register-customer";
import Typography from "../components/atoms/typography/typography";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import { CustomerServices } from "../services/customer.services";
import {
  Customer,
  RequestCreateCustomer,
} from "../types/customer/customer.interface";
import { DocumentTypeServices } from "../services/document-type.services";
import { TDropdownOption } from "../components/molecules/dropdown";
import Table, {
  ColTable,
  ItemAction,
  RowTable,
} from "../components/molecules/table";

const CustomerContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documentType, setDocumentType] = useState<TDropdownOption[]>([]);
  const [typeCustomer, setTypeCustomer] = useState<TDropdownOption[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const customerService = new CustomerServices();
  const documentTypeService = new DocumentTypeServices();

  const getDocumentType = async () => {
    const resultCategories = await documentTypeService.getDocumentType("1");
    setDocumentType(
      resultCategories.map((documentType) => ({
        value: documentType.id,
        name: documentType.nombre,
      }))
    );
  };

  const getTypeCustomer = () => {
    setTypeCustomer([
      {
        value: "1",
        name: "Persona Juridica",
      },
      {
        value: "2",
        name: "Persona Natural",
      },
    ]);
  };

  const getCustomer = async () => {
    const resultCustomer = await customerService.getCustomer("1");
    setCustomers(resultCustomer);
  };

  const createCustomer = async (
    tipoCliente: string,
    nombre: string,
    direccion: string,
    email: string,
    telefono: string,
    tipoDocumentoId: string,
    numeroDocumento: string
  ) => {
    try {
      await customerService.createCustomer({
        tipoCliente,
        nombre,
        direccion,
        email,
        telefono,
        tipoDocumentoId,
        numeroDocumento,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnSubmit = (values: RequestCreateCustomer) => {
    createCustomer(
      values.tipoCliente,
      values.nombre,
      values.direccion,
      values.email,
      values.telefono,
      values.tipoDocumentoId,
      values.numeroDocumento
    );
  };

  useEffect(() => {
    getDocumentType();
    getTypeCustomer();
    getCustomer();
  }, []);

  return (
    <LayoutTemplate>
      <header className="flex justify-between items-center px-4">
        <Typography variant="subtitle" family="semibold">
          Customer
        </Typography>
        <TextIcon
          styles="min-w-[100px] gap-2"
          label="Nuevo"
          labelSpacing="widest"
          variant="small"
          labelColor="text-gray-700"
          family="bold"
          icon="add"
          iconSize="20"
          iconColor={myColors["danger-light"]}
          onClick={handleModal}
        />
      </header>
      <main className="mt-6">
        <Table
          heads={[
            "id",
            "nombre",
            "documento",
            "numero",
            "direccion",
            "email",
            "telefono",
            "acciones",
          ]}
        >
          {customers.map((customer) => (
            <RowTable>
              <ColTable value={customer.id} />
              <ColTable value={customer.nombre} />
              <ColTable value={customer.tipoDocumento} />
              <ColTable value={customer.numeroDocumento} />
              <ColTable value={customer.direccion} />
              <ColTable value={customer.email} />
              <ColTable value={customer.telefono} />

              <ItemAction
                onClickEdit={() => {
                  setIsOpen(true);
                }}
              />
            </RowTable>
          ))}
        </Table>
      </main>
      <footer>
        <ModalFormRegisterCustomer
          isOpen={isOpen}
          onCancel={handleModal}
          documentType={documentType}
          typeCustomer={typeCustomer}
          onSubmit={(values) => {
            handleOnSubmit(values);
            handleModal();
          }}
        />
      </footer>
    </LayoutTemplate>
  );
};

export default CustomerContainer;
