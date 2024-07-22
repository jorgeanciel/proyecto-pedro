import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import InputForm from "../../atoms/input/input-form";
import Typography from "../../atoms/typography/typography";
import Select from "../../atoms/select/select";
import Button from "../../atoms/button/button";
import { TGender } from "../../../models/user.model";

export type FormRegisterUserValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: TGender;
};

type FormRegisterLoginProps = {
  onSubmit: (values: FormRegisterUserValues) => void;
  isLoading?: boolean;
};

const FormRegisterLogin: React.FC<FormRegisterLoginProps> = ({
  onSubmit,
  isLoading,
}) => {
  const initialValues: FormRegisterUserValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "male",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("El nombre es requerido"),
    lastName: Yup.string().required("El apellido es requerido"),
    email: Yup.string()
      .email("Formato de correo inválido")
      .required("El correo es requerido"),
    phone: Yup.string().required("El teléfono es requerido"),
    address: Yup.string().required("La dirección es requerida"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, touched, errors, setFieldValue }) => (
          <Form>
            <section className="flex flex-col gap-8">
              <div>
                <Field
                  type="text"
                  name="firstName"
                  as={InputForm}
                  color="gray-1"
                  expanded
                  placeholder="Nombres"
                />
                {touched.firstName && errors.firstName && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.firstName}
                  </Typography>
                )}
              </div>
              <div>
                <Field
                  type="text"
                  name="lastName"
                  as={InputForm}
                  color="gray-1"
                  expanded
                  placeholder="Apellidos"
                />
                {touched.lastName && errors.lastName && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.lastName}
                  </Typography>
                )}
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  as={InputForm}
                  color="gray-1"
                  icon="email"
                  expanded
                  placeholder="Correo"
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
              <div>
                <Field
                  type="text"
                  name="phone"
                  as={InputForm}
                  color="gray-1"
                  icon="phone"
                  expanded
                  placeholder="Teléfono"
                />
                {touched.phone && errors.phone && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.phone}
                  </Typography>
                )}
              </div>
              <div>
                <Field
                  type="text"
                  name="address"
                  as={InputForm}
                  color="gray-1"
                  icon="ubication"
                  expanded
                  placeholder="Dirección"
                />
                {touched.address && errors.address && (
                  <Typography
                    variant="small"
                    className="text-sm mt-1"
                    spacing="wider"
                    color="text-danger"
                  >
                    {errors.address}
                  </Typography>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Typography
                  label="Sexo"
                  variant="small"
                  color="text-gray-400"
                  spacing="wider"
                />
                <div className="flex items-center gap-3">
                  <Select
                    color="rose-500"
                    name="gender"
                    onSelect={(value) => {
                      setFieldValue("gender", value);
                    }}
                    options={[
                      {
                        value: "male",
                        name: "Masculino",
                      },
                      {
                        value: "female",
                        name: "Femenino",
                      },
                    ]}
                    defaultValue="male"
                  />
                </div>
              </div>
            </section>
            <footer className="mt-10">
              <Button
                isLoading={isLoading}
                type="submit"
                label="Registrar"
                theme="secondary"
                expanded
                disabled={!isValid}
              />
            </footer>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormRegisterLogin;
