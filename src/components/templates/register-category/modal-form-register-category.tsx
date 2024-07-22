import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Typography from "../../atoms/typography/typography";
import * as Yup from "yup";
import Button from "../../atoms/button/button";
import Modal from "../../atoms/modal/modal";
import { RequestCreateCategory } from "../../../types/category/category.interface";

type CategoryProps = {
  onSubmit: (values: RequestCreateCategory) => void;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel: () => void;
};

const ModalFormRegisterCategory: React.FC<CategoryProps> = ({
  onSubmit,
  isOpen,
  isLoading,
  onCancel,
}) => {
  const initialValues: RequestCreateCategory = {
    nombre: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm(); // Aquí reseteas el formulario después de enviarlo
      }}
    >
      {({ isValid, touched, errors, resetForm }) => (
        <Modal isOpen={isOpen} onClose={onCancel}>
          <Form className="w-[440px]">
            <section className="flex flex-col gap-8 mx-auto max-w-lg">
              <Typography
                color="text-gray-700"
                label="Categoría"
                variant="title"
              />
              <Field
                type="text"
                name="nombre"
                as={InputForm}
                color="gray-1"
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
                onClick={() => {
                  onCancel();
                  resetForm();
                }}
              />
            </footer>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalFormRegisterCategory;
