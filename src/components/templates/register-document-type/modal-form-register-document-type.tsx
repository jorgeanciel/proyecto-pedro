import { Field, Form, Formik } from "formik";
import Modal from "../../atoms/modal/modal";
import Typography from "../../atoms/typography/typography";
import InputForm from "../../atoms/input/input-form";
import Button from "../../atoms/button/button";
import * as Yup from "yup";

export type DocumentTypeValues = {
  empresaId: string;
  cod: string;
  nombre: string;
  descripcion: string;
};

type DocumentTypeProps = {
  onSubmit: (values: DocumentTypeValues) => void;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel: () => void;
};

const ModalFormRegisterDocumentType: React.FC<DocumentTypeProps> = ({
  onSubmit,
  isOpen,
  isLoading,
  onCancel,
}) => {
  const initialValues: DocumentTypeValues = {
    empresaId: "",
    cod: "",
    nombre: "",
    descripcion: "",
  };

  const validationSchema = Yup.object({
    cod: Yup.string().required("El cod es requerido"),
    nombre: Yup.string().required("El nombre es requerido"),
    descripcion: Yup.string().required("La descripción es requerida"),
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
                label="Tipo de Documento"
                variant="title"
              />
              <div>
                <Field
                  type="text"
                  name="cod"
                  as={InputForm}
                  color={"gray-1"}
                  expanded
                  placeholder="Cod"
                />
                {touched.cod && errors.cod && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.cod}
                  </Typography>
                )}
              </div>

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
                  placeholder="Descripción"
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

export default ModalFormRegisterDocumentType;
