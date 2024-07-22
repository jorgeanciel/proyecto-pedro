type sizes = "small" | "medium" | "large";

type AvatarProps = {
   image?: string;
  size: sizes;
};

const AvatarProfile: React.FC<AvatarProps> = ({ image, size }) => {
  const twSizes = {
    small: "w-24 h-24",
    medium: "w-32 h-32",
    large: "w-44 h-44",
  };
  return (
    <div
      className={`${twSizes[size]} bg-white rounded-full flex items-center justify-cente`}
    >
      <img
        className={`${twSizes[size]} shadow-xl rounded-xl object-cover`}
        src={image}
        alt="Mi image"
      />
    </div>
  );
};

export default AvatarProfile;

AvatarProfile.defaultProps = {
  image:
    "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  size: "medium",
};
