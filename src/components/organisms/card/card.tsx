import React from "react";
import Typography from "../../atoms/typography/typography";
import ItemButton from "../../molecules/item-button";
import Avatar from "../../atoms/avatar/avatar";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";

type CardProps = {
  title: string;
  body: string;
  footer: string;
};

const Card: React.FC<CardProps> = ({ title, body, footer }) => {
  return (
    <div className="w-60 shadow-lg rounded-xl p-4 bg-white">
      <header>
        <Typography
          label={title}
          variant="body"
          family="bold"
          color="text-dark"
        />
        <section className="flex gap-2 relative mt-1.5">
          <TextIcon
            label="190 g"
            labelColor="text-gray-300"
            icon="point"
            iconSize="13"
            iconColor={myColors["gray-3"]}
          />
          <TextIcon
            label="120 Kcal"
            labelColor="text-gray-300"
            icon="fire"
            iconSize="10"
            iconColor={myColors.secondary}
          />
          <div className="absolute right-[-40px] top-[-40px]">
            <Avatar
              size="small"
              image="https://elhornodelucas.com/wp-content/uploads/2017/03/Alitas-Chilis-baja-1.jpg"
            />
          </div>
        </section>
      </header>

      <main>
        <Typography
          label={body}
          variant="small"
          family="medium"
          color="text-gray-300 mt-20"
        />
      </main>

      <footer className="mt-8">
        <ItemButton buttonLabel="Add" textLabel={footer} />
      </footer>
    </div>
  );
};

export default Card;
