import { Field, Form, Formik } from "formik";
import Typography from "../../atoms/typography/typography";
import InputForm from "../../atoms/input/input-form";
import Button from "../../atoms/button/button";
import * as Yup from "yup";
import Modal from "../../atoms/modal/modal";
import Dropdown, { TDropdownOption } from "../../molecules/dropdown";

export type SubCategoryValues = {
  categoriaId: string;
  nombre: string;
};

type SubCategoryProps = {
  onSubmit: (values: SubCategoryValues) => void;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel: () => void;
  categories: TDropdownOption[];
};

const ModalFormRegisterSubCategory: React.FC<SubCategoryProps> = ({
  onSubmit,
  isOpen,
  isLoading,
  onCancel,
  categories,
}) => {
  const initialValues: SubCategoryValues = {
    categoriaId: "",
    nombre: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    categoriaId: Yup.number().required("La categoria es requerida"),
  });

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, touched, errors, setFieldValue }) => (
          <Form className="w-[300px]">
            <section className="flex flex-col gap-8 mx-auto max-w-lg">
              <Typography
                color="text-gray-700"
                label="Sub Categoría"
                variant="title"
              />
              <div className="flex flex-col items-center justify-between gap-7">
                <div className="w-full">
                  <Dropdown
                    onChange={(item) => {
                      setFieldValue("categoriaId", item.value);
                    }}
                    options={categories}
                    label="Categoria"
                  />
                </div>
                <div className="w-full">
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
                </div>
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
                isLoading={isLoading}
                type="submit"
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

export default ModalFormRegisterSubCategory;
