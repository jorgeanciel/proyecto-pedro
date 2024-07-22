import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import * as Yup from "yup";
import Modal from "../../atoms/modal/modal";
import Dropdown, { TDropdownOption } from "../../molecules/dropdown";

export type FormCustomerValue = {
  empresaId: string;
  tipoCliente: string;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  tipoDocumentoId: string;
  numeroDocumento: string;
};

type formCustomerProps = {
  onSubmit: (values: FormCustomerValue) => void;
  isLoading?: boolean;
  onCancel: () => void;
  isOpen: boolean;
  documentType: TDropdownOption[];
  typeCustomer: TDropdownOption[];
};

const ModalFormRegisterCustomer: React.FC<formCustomerProps> = ({
  onSubmit,
  isLoading,
  onCancel,
  isOpen,
  documentType,
  typeCustomer,
}) => {
  const initialValues: FormCustomerValue = {
    empresaId: "",
    tipoCliente: "",
    nombre: "",
    direccion: "",
    email: "",
    telefono: "",
    tipoDocumentoId: "",
    numeroDocumento: "",
  };

  const validationSchema = Yup.object({
    tipoCliente: Yup.string().required("Tipo de Cliente es requerido"),
    nombre: Yup.string().required("Nombre es requerido"),
    direccion: Yup.string().required("Direccion es requerido"),
    email: Yup.string()
      .email("Formato de correo invalido")
      .required("Email es requerido"),
    telefono: Yup.string().required("Telefono es requerido"),
    tipoDocumentoId: Yup.string().required("Ingrese tipo de documento"),
    numeroDocumento: Yup.string().required("Numero de documento es requerido"),
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (/\d/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleKeyDownWord = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !(
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "Tab" ||
        (event.key >= "0" && event.key <= "9")
      )
    ) {
      event.preventDefault();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ touched, errors, isValid, setFieldValue }) => (
          <Form>
            <section className="flex flex-col gap-10 mx-auto max-w-lg">
              <Typography
                color="text-gray-700"
                label="Datos del Cliente"
                variant="title"
              />
              <div>
                <Field
                  type="text"
                  name="nombre"
                  as={InputForm}
                  color="gray-1"
                  expanded
                  placeholder="Nombres y apellidos"
                  onKeyDown={handleKeyDown}
                  icon="person"
                />
                {touched.nombre && errors.nombre && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.nombre}
                  </Typography>
                )}
              </div>

              <div className="w-full flex items-center gap-8 justify-between">
                <Dropdown
                  label="Tipo de Cliente"
                  onChange={(item) => {
                    setFieldValue("tipoCliente", item.value);
                  }}
                  options={typeCustomer}
                />

                {touched.tipoCliente && errors.tipoCliente && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.tipoCliente}
                  </Typography>
                )}
              </div>

              <div className="flex justify-between items-center gap-16">
                <div className="w-full">
                  <Dropdown
                    onChange={(item) => {
                      setFieldValue("tipoDocumentoId", item.value);
                    }}
                    label="Tipo de Documento"
                    options={documentType}
                  />
                  {touched.tipoDocumentoId && errors.tipoDocumentoId && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.tipoDocumentoId}
                    </Typography>
                  )}
                </div>
                <div className="w-full pt-7">
                  <Field
                    type="text"
                    name="numeroDocumento"
                    as={InputForm}
                    color="gray-1"
                    expanded
                    placeholder="N° Documento"
                    onKeyDown={handleKeyDownWord}
                    icon="payment"
                  />
                  {touched.numeroDocumento && errors.numeroDocumento && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.numeroDocumento}
                    </Typography>
                  )}
                </div>
              </div>

              <div>
                <div className="w-full">
                  <Field
                    type="text"
                    name="direccion"
                    as={InputForm}
                    expanded
                    color="gray-1"
                    placeholder="Direccion"
                    icon="ubication"
                  />
                  {touched.direccion && errors.direccion && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.direccion}
                    </Typography>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-16">
                <div className="w-full">
                  <Field
                    type="text"
                    name="telefono"
                    as={InputForm}
                    icon="phone"
                    color="gray-1"
                    expanded
                    placeholder="Telefono"
                    onKeyDown={handleKeyDownWord}
                  />
                  {touched.telefono && errors.telefono && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.telefono}
                    </Typography>
                  )}
                </div>
                <div className="w-full">
                  <Field
                    type="text"
                    name="email"
                    as={InputForm}
                    color="gray-1"
                    expanded
                    placeholder="Email"
                    icon="email"
                  />
                  {touched.email && errors.email && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.email}
                    </Typography>
                  )}
                </div>
              </div>
              <footer className="mt-10 flex justify-end max-w-lg ">
                <Button
                  type="submit"
                  label="Registrar"
                  theme="primary"
                  disabled={!isValid}
                  isLoading={isLoading}
                  outlined
                />
                <Button
                  type="reset"
                  label="Cancelar"
                  theme="secondary"
                  onClick={onCancel}
                  outlined
                  isLink
                />
              </footer>
            </section>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalFormRegisterCustomer;
