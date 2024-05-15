import React from "react";
import {
  VStack,
  Image,
  Text,
  Center,
  ScrollView,
  Box,
} from "native-base";
import {Input} from "@components/Input";
import {Button} from "@components/Button";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormDataProps} from "src/@types/global";
import {signInSchema} from "@helpers/formsSchema/signinSchema";
import LogoSvg from "@assets/logo.svg";
import BrandSvg from "@assets/brand.svg";

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} justifyContent="space-between">
        <Box bg="gray.600" px={10} pb={20} roundedBottom={24} >
          <Image
            // source={BackgroundImg}
            // defaultSource={BackgroundImg}
            alt="Pessoas treinando"
            resizeMode="contain"
            position="absolute"
          />

          <Center my={24}>
            <LogoSvg />

            <Box mt={8}>
              <BrandSvg />
            </Box>
            <Text color="gray.300" fontSize="sm">
              Seu espaço de compra e venda
            </Text>
          </Center>

          <Center flex={1}>
            <Text color="gray.200" fontSize="sm" mb={6}>
              Acesse sua conta
            </Text>

            <Controller
              control={control}
              name="email"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button
              title="Entrar"
              // onPress={handleSubmit(handleSignIn)}
              // isLoading={isLoading}
              mt={5}
            />
          </Center>
        </Box>

        <Box px={10} pb={24}>
          <Center mt={12}>
            <Text color="gray.200" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso?
            </Text>
          </Center>

          <Button
            title="Criar uma conta"
            mt={2}
            color="gray"
            // onPress={handleNewAccount}
          />
        </Box>
      </VStack>
    </ScrollView>
  );
};
