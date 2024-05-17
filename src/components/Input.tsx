import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Pressable
} from "native-base";
import {useState} from "react";
import SearchSvg from "@assets/search.svg";

type Props = IInputProps & {
  errorMessage?: string | null;
  secureTextEntry?: boolean | null;
};

export function Input({errorMessage = null, isInvalid, secureTextEntry = false, ...rest}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        bg="white"
        h={12}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="black"
        fontFamily="body"
        mb={4}
        rounded="lg"
        placeholderTextColor="gray.400"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bgColor: "white",
          borderWidth: 1,
          borderColor: "gray.300",
        }}
        secureTextEntry={showPassword}
        type={secureTextEntry && !showPassword ? "password" : "text"}
        InputRightElement={
          secureTextEntry ? (
            <Pressable onPress={() => setShowPassword(!showPassword)} right={5}>
              <SearchSvg />
            </Pressable>
          ) : undefined
        }
        {...rest}
      />

      <FormControl.ErrorMessage mt={-3} mb={3} _text={{color: "red.500"}}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
