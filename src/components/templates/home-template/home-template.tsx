import { myColors } from "../../../constants/colors";
import UseDataUser from "../../../hooks/user/use-data-user.hook";
import HeaderHome from "../../organisms/header-home/header-home";
import Menu from "../../organisms/menu/menu";

type LayoutTemplateProps = {
  children: React.ReactNode;
};
const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => {
  const { userData, logOut } = UseDataUser();

  const handlerLogout = () => {
    logOut();
  };
  const menuList: any = [
    {
      icon: "menu",
      label: "Inicio",
      color: myColors["danger-light"],
      showBorder: true,
      onClick: () => console.log("click"),
    },
    {
      icon: "comida",
      label: "Ordenar",
      color: myColors.primary,
      showBorder: false,
      onClick: () => console.log("click"),
    },
    {
      icon: "payment",
      label: "Payment",
      color: myColors.secondary,
      showBorder: false,
      onClick: () => console.log("click"),
    },
    {
      icon: "about",
      label: "About",
      color: myColors["gray-2"],
      showBorder: false,
      onClick: () => console.log("click"),
    },
  ];
  return (
    <>
      <Menu menuList={menuList} logOut={handlerLogout} />
      <header className="flex gap-3 w-full bg-white-light w-full px-6 py-3 md:pl-52">
        <HeaderHome userData={userData} />
      </header>
      <main className="h-full mt-5 md:pl-52">{children}</main>
    </>
  );
};

export default LayoutTemplate;
