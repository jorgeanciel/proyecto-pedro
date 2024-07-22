import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import * as Yup from "yup";
import Modal from "../../atoms/modal/modal";

export type FormRegisterCompanyValues = {
  nombre: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  ruc: string;
  responsable: string;
};

type ModalFormRegisterCompanyProps = {
  onSubmit: (values: FormRegisterCompanyValues) => void;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel: () => void;
};

const ModalFormRegisterCompany: React.FC<ModalFormRegisterCompanyProps> = ({
  onSubmit,
  isOpen,
  isLoading,
  onCancel,
}) => {
  const initialValues: FormRegisterCompanyValues = {
    nombre: "",
    descripcion: "",
    direccion: "",
    telefono: "",
    ruc: "",
    responsable: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    descripcion: Yup.string().required("La descripción es requedida"),
    direccion: Yup.string().required("La dirección es requerida"),
    telefono: Yup.string().required("El teléfono es requerido"),
    ruc: Yup.string().required("El ruc es requerido"),
    responsable: Yup.string().required("El responsable es requerido"),
  });

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, touched, errors }) => (
          <Form className="w-[440px]">
            <section className="flex flex-col gap-8 mx-auto max-w-lg">
              <Typography
                color="text-gray-700"
                label="Empresa"
                variant="title"
              />
              <div>
                <Field
                  type="text"
                  name="nombre"
                  as={InputForm}
                  color={"gray-1"}
                  expanded
                  placeholder="Nombre"
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
              <div>
                <Field
                  type="text"
                  name="descripcion"
                  as={InputForm}
                  color={"gray-1"}
                  expanded
                  placeholder="Descripcion"
                />
                {touched.descripcion && errors.descripcion && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.descripcion}
                  </Typography>
                )}
              </div>
              <div>
                <Field
                  type="text"
                  name="direccion"
                  as={InputForm}
                  color={"gray-1"}
                  icon="ubication"
                  expanded
                  placeholder="Dirección"
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

              <section className="flex justify-between items-center">
                <Field
                  type="text"
                  name="telefono"
                  as={InputForm}
                  color={"gray-1"}
                  icon="phone"
                  expanded
                  placeholder="Teléfono"
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
                <Field
                  type="text"
                  name="ruc"
                  as={InputForm}
                  color={"gray-1"}
                  expanded
                  placeholder="RUC"
                />
                {touched.ruc && errors.ruc && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.ruc}
                  </Typography>
                )}
              </section>
              <div>
                <Field
                  type="text"
                  name="responsable"
                  as={InputForm}
                  color={"gray-1"}
                  expanded
                  placeholder="Responsable"
                />
                {touched.responsable && errors.responsable && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.responsable}
                  </Typography>
                )}
              </div>
              <div>
                <Typography variant="body" color="gray-1" className="mt-4">
                  Estado
                </Typography>
                <input type="checkbox" name="estado" />
              </div>
            </section>
            <footer className="mt-10 mx-auto max-w-lg flex justify-end">
              <Button
                className="mr-2"
                isLoading={isLoading}
                type="submit"
                label="Registrar"
                theme="primary"
                outlined
                disabled={!isValid}
              />
              <Button
                type="reset"
                label="Cancelar"
                theme="secondary"
                outlined
                isLink
                disabled={!isValid}
                onClick={onCancel}
              />
            </footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalFormRegisterCompany;
