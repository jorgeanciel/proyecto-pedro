import React from "react";
import * as Yup from "yup";
import Typography from "../../atoms/typography/typography";
import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Button from "../../atoms/button/button";
import Modal from "../../atoms/modal/modal";
import { RequestCreatePaymentMethod } from "../../../types/payment-method/payment-method.interface";

type FormWayPayProp = {
  onSubmit: (values: RequestCreatePaymentMethod) => void;
  isLoading?: boolean;
  onCancel: () => void;
  isOpen: boolean;
};

const ModalFormRegisterPaymentMethod: React.FC<FormWayPayProp> = ({
  onSubmit,
  isLoading,
  onCancel,
  isOpen,
}) => {
  const initialValues: RequestCreatePaymentMethod = {
    empresaId: "1",
    nombre: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Escribe un nombre para la forma de pago"),
  });

  return (
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
                label="Forma de Pago"
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
              <footer className="flex justify-end gap-2 mt-4">
                <Button
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
                  onClick={() => {
                    onCancel();
                    resetForm();
                  }}
                  outlined
                  isLink
                />
              </footer>
            </section>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalFormRegisterPaymentMethod;
