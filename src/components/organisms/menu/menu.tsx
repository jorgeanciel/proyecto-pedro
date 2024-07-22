import React from "react";
import { MyIcons } from "../../atoms/icon/icon";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";

type MenuItemProps = {
  icon: MyIcons;
  label: string;
  color: string;
  showBorder: boolean;
  onClick?: () => void;
};
type MenuProps = {
  menuList: MenuItemProps[];
  logOut?: () => void;
};

const Menu: React.FC<MenuProps> = ({ menuList, logOut }) => {
  return (
    <div className="min-h-screen rounded-2xl py-6 shadow-lg bg-white relative md:fixed flex-col justiry-between hidden md:flex w-48 z-10">
      <header className="flex justify-center mt-6">
        <TextIcon
          labelSpacing="wider"
          labelColor="text-dark"
          label="FreshFood"
          variant="body"
          family="bold"
          iconColor={myColors["danger-light"]}
        />
      </header>
      <main className="flex flex-col gap-7 items-center flex-1 mt-16">
        {menuList.map((menu) => (
          <div
            key={`text-icon-${menu.label}`}
            role="button"
            onClick={menu.onClick}
          >
            <TextIcon
              styles="min-w-[100px] gap-4"
              label={menu.label}
              labelSpacing="wider"
              variant="small"
              family="bold"
              icon={menu.icon}
              iconSize="17"
              iconColor={menu.color}
              showBorder={menu.showBorder}
              labelColor="text-gray-700"
            />
          </div>
        ))}
      </main>
      <footer className="flex justify-center aboslute bottom-4">
        <div role="button" onClick={logOut}>
          <TextIcon
            styles="min-w-[100px] gap-4"
            label={"Logout"}
            labelSpacing="widest"
            variant="small"
            labelColor="text-gray-600"
            family="bold"
            icon="logout"
            iconSize="20"
            iconColor={myColors["danger-light"]}
          />
        </div>
      </footer>
    </div>
  );
};

export default Menu;

Menu.defaultProps = {
  menuList: [
    {
      icon: "menu",
      label: "Menu",
      color: myColors["danger-light"],
      showBorder: true,
    },
    {
      icon: "car",
      label: "Delivery",
      color: myColors.primary,
      showBorder: false,
    },
    {
      icon: "payment",
      label: "Payment",
      color: myColors.secondary,
      showBorder: false,
    },
    {
      icon: "about",
      label: "About",
      color: myColors["gray-4"],
      showBorder: false,
    },
  ],
};
