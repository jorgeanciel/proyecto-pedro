import { myColors } from "../../../constants/colors";
import { TUserDto } from "../../../types/user/user.interface";
import Icon from "../../atoms/icon/icon";
import InputSearch from "../../atoms/input-search/input-search";
import TextIcon from "../../molecules/text-icon";

type HeaderHomeProps = {
  userData: TUserDto;
};

const HeaderHome: React.FC<HeaderHomeProps> = ({ userData }) => {
  // const userName = `${userData.firstName.split(" ")[0] || ""} ${
  //   userData.lastName.split(" ")[0] || ""
  // }`;

  const userName = "Pedro";

  return (
    <div className="flex flex-wrap justify-between w-full">
      <div className="md:hidden">
        <Icon name="menu" size="25" color={myColors.dark} />
      </div>
      <TextIcon
        label={userData?.ubication}
        iconSize="17"
        icon="ubication"
        variant="small"
        family="bold"
        iconColor={myColors.dark}
        styles="gap-2"
      />
      <div className="hidden md:flex">
        <InputSearch />
      </div>

      <section className="flex items-center justify-center gap-5">
        <TextIcon
          label={userName}
          icon="user"
          iconSize="19"
          family="bold"
          styles="gap-2 capitalize"
          iconColor={myColors.dark}
        />
        <Icon name="car-bg" color={myColors.dark} size="17" />
      </section>
    </div>
  );
};

export default HeaderHome;
