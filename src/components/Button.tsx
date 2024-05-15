import {Button as ButtonNativeBase, IButtonProps, Text} from "native-base";

type Props = IButtonProps & {
  title: string;
  color?: "black" | "blue" | "gray";
};

export function Button({title, color = "blue", ...rest}: Props) {
  const handleButtonBackgroundStyle = (color: string) => {
    if (color === "black") {
      return "gray.100";
    } else if (color === "blue") {
      return "blue.500";
    } else if (color === "gray") {
      return "gray.500";
    }
  };

  const handleButtonPressedStyle = (color: string) => {
    if (color === "black") {
      return "gray.200";
    } else if (color === "blue") {
      return "blue.700";
    } else if (color === "gray") {
      return "gray.600";
    }
  };

  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={handleButtonBackgroundStyle(color)}
      borderColor="green.500"
      rounded="lg"
      _pressed={{
        bg: handleButtonPressedStyle(color)
      }}
      {...rest}
    >
      <Text
        color={color === "gray" ? "gray.200" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
