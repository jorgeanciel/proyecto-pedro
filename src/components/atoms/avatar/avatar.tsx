type sizes = "small" | "medium" | "large";

type AvatarProps = {
  image?: string;
  size: sizes;
};

const Avatar: React.FC<AvatarProps> = ({ image, size }) => {
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
        className={`${twSizes[size]} shadow-lg p-1.5 rounded-full object-cover`}
        src={image}
        alt="Mi image"
      />
    </div>
  );
};

export default Avatar;

Avatar.defaultProps = {
  image:
    "https://static.vecteezy.com/system/resources/previews/019/613/640/original/pizza-graphic-clipart-design-free-png.png",
  size: "medium",
};
