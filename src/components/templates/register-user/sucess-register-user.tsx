import Button from "../../atoms/button/button";
import SuccessImage from "../../atoms/image-svg/success";
import Typography from "../../atoms/typography/typography";

type SucessRegisterUserProps = {
  onSignIn: () => void;
  isLoading: boolean;
};
const SuccessRegisterUser: React.FC<SucessRegisterUserProps> = ({
  onSignIn,
  isLoading,
}) => {
  return (
    <section className="flex flex-col items-center gap-10 te top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
      <header>
        <section className="flex flex-row justify-between items-center gap-4">
          <Typography
            label="Registro exitoso!"
            variant="subtitle"
            color="text-gray-600"
            family="bold"
            spacing="widest"
          />
        </section>
      </header>
      <main>
        <SuccessImage />
      </main>
      <footer>
        <Button
          label="Iniciar Sesión"
          theme="secondary"
          className="w-60"
          onClick={onSignIn}
          isLoading={isLoading}
        />
      </footer>
    </section>
  );
};

export default SuccessRegisterUser;
