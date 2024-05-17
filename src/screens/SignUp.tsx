import React from "react";
import {VStack, Text, Center, ScrollView, Box} from "native-base";
import {Input} from "@components/Input";
import {Button} from "@components/Button";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignUpProps} from "src/@types/global";
import LogoSvg from "@assets/logo.svg";
import EditPhotoSvg from "@assets/edit_photo.svg";
import {useNavigation} from "@react-navigation/native";
import {signUpSchema} from "@helpers/formsSchema/signupSchema";
import { TouchableOpacity } from "react-native";

export const SignUp = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpProps>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  const handleLogin = () => {
    navigation.navigate("signIn");
  };

  const handleSignIn = () => {
    console.log("criou conta");
  };

  const handleUserPhotoSelected = () => {
    console.log('alterar foto');
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} justifyContent="space-between">
        <Box px={10} roundedBottom={24}>
          <Center mt={12} mb={6}>
            <LogoSvg width={70} height={50} />

            <Text color="gray.100" fontFamily="heading" fontSize={22} mt={2}>
              Boas vindas!
            </Text>

            <Text
              color="gray.100"
              fontFamily="body"
              fontSize={15}
              mt={2}
              textAlign="center"
            >
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </Center>

          <Center flex={1}>
            <Box mb={5}>
              <TouchableOpacity onPress={handleUserPhotoSelected}>
                <EditPhotoSvg />
              </TouchableOpacity>
            </Box>

            <Controller
              control={control}
              name="name"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Nome"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

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
              name="phone"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Telefone"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.phone?.message}
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

            <Controller
              control={control}
              name="confirm_password"
              render={({field: {onChange, value}}) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title="Criar"
              onPress={handleSubmit(handleSignIn)}
              // isLoading={isLoading}
              mt={2}
              mb={8}
              color="black"
            />
          </Center>
        </Box>

        <Box px={10} mb={12}>
          <Center>
            <Text color="gray.200" fontSize="sm" mb={4} fontFamily="body">
              Já tem uma conta?
            </Text>
          </Center>

          <Button title="Ir para o login" color="gray" onPress={handleLogin} />
        </Box>
      </VStack>
    </ScrollView>
  );
};
