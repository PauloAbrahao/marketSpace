import {IconButtonProps} from "src/@types/global";
import {Button, HStack, Text} from "native-base";
import {Plus} from "phosphor-react-native";

export const IconButton = ({onPress, color}: IconButtonProps) => {
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
    <Button
      h={46}
      px={5}
      rounded={6}
      onPress={onPress}
      _pressed={{
        bg: handleButtonPressedStyle(color),
      }}
      bg={handleButtonBackgroundStyle(color)}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Plus size={16} color={color === "gray" ? "gray.200" : "white"} />
        <Text
          fontSize={14}
          fontFamily="heading"
          ml={2}
          color={color === "gray" ? "gray.200" : "white"}
        >
          Criar anúncio
        </Text>
      </HStack>
    </Button>
  );
};
