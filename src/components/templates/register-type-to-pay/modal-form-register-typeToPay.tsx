import React from "react";
import * as Yup from "yup";
import Typography from "../../atoms/typography/typography";
import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import Button from "../../atoms/button/button";
import Modal from "../../atoms/modal/modal";
import { RequestCreatePaymentType } from "../../../types/payment-type/payment-type.interface";
import Dropdown, { TDropdownOption } from "../../molecules/dropdown";

type PaymentTypeProp = {
  onSubmit: (values: RequestCreatePaymentType) => void;
  isLoading?: boolean;
  onCancel: () => void;
  isOpen: boolean;
  methodPay: TDropdownOption[];
};

const ModalFormRegisterTypeToPay: React.FC<PaymentTypeProp> = ({
  onSubmit,
  isLoading,
  onCancel,
  isOpen,
  methodPay,
}) => {
  const initialValues: RequestCreatePaymentType = {
    nombre: "",
    formaPagoId: "",
    empresaId: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Escribe un nombre para el tipo de pago"),
    formaPagoId: Yup.string().required("Campo Requerido"),
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
      {({ touched, errors, isValid, setFieldValue, resetForm }) => (
        <Modal isOpen={isOpen} onClose={onCancel}>
          <Form className="w-[440px]">
            <section className="flex flex-col gap-10 mx-auto max-w-lg">
              <Typography
                label="Ingrese Datos"
                variant="title"
                color="text-gray-700"
              />
              <div className="w-full">
                <Field
                  type="text"
                  name="nombre"
                  as={InputForm}
                  color="gray-1"
                  expanded
                  placeholder="Nombre"
                  icon="payment"
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
                <Dropdown
                  label="Forma de Pago"
                  onChange={(item) => {
                    setFieldValue("formaPagoId", item.value);
                  }}
                  options={methodPay}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  className="font-montserrat-semibold border-0"
                  isLoading={isLoading}
                  type="submit"
                  label="Registrar"
                  theme="primary"
                  disabled={!isValid}
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
              </div>
            </section>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalFormRegisterTypeToPay;
