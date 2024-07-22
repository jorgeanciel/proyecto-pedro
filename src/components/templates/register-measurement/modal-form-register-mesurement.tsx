import React from "react";
import * as Yup from "yup";
import Typography from "../../atoms/typography/typography";
import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Button from "../../atoms/button/button";
import Modal from "../../atoms/modal/modal";
import { RequestCreateMesurement } from "../../../types/mesurement/mesurement.interface";

type formUnitProps = {
  onSubmit: (values: RequestCreateMesurement) => void;
  isLoading?: boolean;
  onCancel: () => void;
  isOpen: boolean;
};

const ModalFormRegisterMeasurement: React.FC<formUnitProps> = ({
  onSubmit,
  isLoading,
  onCancel,
  isOpen,
}) => {
  const initialValues: RequestCreateMesurement = {
    nombre: "",
    abreviatura: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Espacio requerido"),
    abreviatura: Yup.string().required("Espacio requerido"),
  });

  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ touched, errors, isValid, resetForm }) => (
          <Modal isOpen={isOpen} onClose={onCancel}>
            <Form className="w-[440px]">
              <section className="flex flex-col gap-12 mx-auto max-w-lg">
                <Typography
                  color="text-gray-700"
                  label="Ingrese Datos"
                  variant="title"
                />
                <div>
                  <Field
                    type="text"
                    name="nombre"
                    as={InputForm}
                    color="gray-1"
                    expanded
                    placeholder="Nombre"
                    icon="name"
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
                <div className="w-full">
                  <Field
                    type="text"
                    name="abreviatura"
                    as={InputForm}
                    color="gray-1"
                    expanded
                    placeholder="Abreviatura"
                    icon="weight"
                  />
                  {touched.abreviatura && errors.abreviatura && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.abreviatura}
                    </Typography>
                  )}
                </div>
              </section>
              <footer className="mt-8 flex justify-end gap-2">
                <Button
                  className="font-montserrat-semibold border-0"
                  type="submit"
                  label="Registrar"
                  theme="primary"
                  disabled={!isValid}
                  isLoading={isLoading}
                  outlined
                />
                <Button
                  className="font-montserrat-semibold border-0"
                  type="reset"
                  label="Cancelar"
                  theme="secondary"
                  onClick={() => {
                    onCancel();
                    resetForm();
                  }}
                  outlined
                  isLink
                />
              </footer>
            </Form>
          </Modal>
        )}
      </Formik>
    </main>
  );
};

export default ModalFormRegisterMeasurement;
