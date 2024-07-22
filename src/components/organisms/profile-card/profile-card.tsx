import React from "react";
import AvatarProfile from "../../atoms/avatar-profile/avatar-profile";
import Typography from "../../atoms/typography/typography";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";
import Button from "../../atoms/button/button";
import useDataUser from "../../../hooks/user/use-data-user.hook";

const ProfileCard: React.FC = () => {
  const {
    userData: { visits, lastName, firstName, followers, ubication, level },
  } = useDataUser();

  const customName = `${firstName.split(" ")[0] || ""} ${
    lastName.split(" ")[0] || ""
  }`;

  return (
    <div className="py-5 px-5 rounded-lg shadow-md relative pb-12 md:pb-5 bg-white">
      <section className="absolute right-0 bottom-0 md:bottom-auto md:top-0 px-4 py-2 bg-amber-400 rounded-tr-md w-24 text-center">
        <Typography
          label={level}
          variant="small"
          family="bold"
          color="text-white"
        />
      </section>
      <header className="flex flex-col items-center md:flex-row gap-0 md:gap-4 h-auto md:h-36">
        <section className="relative -top-16">
          <AvatarProfile size="large" />
        </section>
        <section className="flex flex-col items-center md:items-start gap-4 relative -top-8">
          <Typography
            label={customName}
            variant="subtitle"
            family="bold"
            spacing="wider"
            className="capitalize"
          />
          <Typography
            label="CLIENTE FAMILIA"
            variant="small"
            spacing="wider"
            color="text-gray-300"
            family="bold"
          />
          <TextIcon
            label={ubication}
            variant="small"
            icon="fire"
            iconSize="15"
            labelColor="text-gray-300"
            iconColor={myColors["gray-3"]}
          />
        </section>
        <section className="flex flex-col justify-start">
          <Button label="Mi Perfil" outlined />
        </section>
      </header>
      <main className="flex flex-wrap mt-7 md:mt-0 gap-2 md:gap-0 justify-between">
        <section className="flex items-center gap-2">
          <Typography label={visits} variant="title" family="bold" />
          <Typography
            label="Visitas"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex items-center gap-2">
          <Typography label="10%" variant="title" family="bold" />
          <Typography
            label="Rating"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex flex-wrap items-center gap-2">
          <Typography label={followers} variant="title" family="bold" />
          <Typography
            label="Seguidores"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
      </main>
    </div>
  );
};

export default ProfileCard;
