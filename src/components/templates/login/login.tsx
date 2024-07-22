import React from "react";
import * as Yup from "yup";

import Typography from "../../atoms/typography/typography";
import PersonImage from "../../atoms/image-svg/person";
import Button from "../../atoms/button/button";

import Icon from "../../atoms/icon/icon";
import { myColors } from "../../../constants/colors";
import { Field, Form, Formik } from "formik";
import InputForm from "../../atoms/input/input-form";
import { TUserLogInParams } from "../../../types/user/user.interface";

type LoginProps = {
  onClickSingIn: (userName: string, password: string) => void;
  isLoading?: boolean;
  onClickRegister: () => void;
  isError?: boolean;
};

const Login: React.FC<LoginProps> = ({
  onClickSingIn,
  onClickRegister,
  isLoading,
  isError,
}) => {
  const initialValues: TUserLogInParams = {
    user: "",
    password: "",
  };

  const validationSchema = Yup.object({
    user: Yup.string().required("Ingresar usuario"),
    password: Yup.string().required("Ingresar contraseña"),
  });
  const handleOnClickSingIn = (userParams: TUserLogInParams) => {
    const { user, password } = userParams;
    onClickSingIn(user, password);
  };

  return (
    <div className="p-10 h-screen w-screen">
      <header className="flex flex-col justify-center items-center gap-8">
        <section className="flex flex-row justify-between items-center gap-4">
          <Typography
            label="Karaoke"
            variant="title"
            color="text-gray-700"
            family="bold"
            spacing="wider"
          />
          <Icon name="fire" color={myColors["danger-light"]} size="30" />
        </section>
        <Typography
          label="Vive una experiencia inolvidable.."
          variant="body"
          color="text-gray-400"
          spacing="wider"
        />
        <PersonImage />
      </header>

      <main className="flex flex-col items-center justify-center w-full mt-12 gap-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleOnClickSingIn}
        >
          {({ isValid, touched, errors }) => (
            <Form>
              <section className="flex flex-col gap-8">
                <div>
                  <Field
                    type="text"
                    name="user"
                    as={InputForm}
                    color="danger-light"
                    icon="person"
                    expanded
                    placeholder="Usuario"
                  />
                  {touched.user && errors.user && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.user}
                    </Typography>
                  )}
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    as={InputForm}
                    color="danger-light"
                    icon="lock"
                    expanded
                    placeholder="password"
                  />
                  {touched.user && errors.user && (
                    <Typography
                      variant="small"
                      className="text-sm mt-1"
                      spacing="wider"
                      color="text-danger"
                    >
                      {errors.user}
                    </Typography>
                  )}
                  {isError && (
                    <Typography
                      variant="small"
                      className="text-sm mt-2 text-center"
                      spacing="wider"
                      color="text-danger"
                    >
                      Usuario y/o contraseña incorrectos
                    </Typography>
                  )}
                </div>
              </section>
              <section className="mt-8">
                <Button
                  isLoading={isLoading}
                  type="submit"
                  className="w-64"
                  label="Sign In"
                  theme="secondary"
                  onClick={() => handleOnClickSingIn}
                  disabled={!isValid}
                />
              </section>
            </Form>
          )}
        </Formik>
      </main>

      <footer className="flex flex-col items-center mt-5">
        <section className="flex items-center justify-center gap-3 mt-5">
          <Typography
            variant="small"
            label="Aun no tienes una cuenta?"
            color="text-gray-600"
            className="text-xs"
            spacing="wide"
          />
          <Typography
            variant="small"
            label="Registrarse"
            color="text-danger-light"
            className="text-xs cursor-pointer"
            spacing="wider"
            onClick={onClickRegister}
          />
        </section>
      </footer>
    </div>
  );
};

export default Login;
