import {Heading, HStack, Text, VStack} from "native-base";

import defaulUserPhotoImg from "@assets/userPhotoDefault.png";
import {UserPhoto} from "./UserPhoto";
import {IconButton} from "./IconButton";

export function HomeHeader() {
  const handleAddAnnouncement = () => {
    console.log("criar anuncio");
  };

  return (
    <HStack pt={16} pb={5} alignItems="center">
      <UserPhoto
        source={defaulUserPhotoImg}
        size={12}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="17">
          Boas vindas,
        </Text>

        <Heading color="gray.100" fontSize="16">
          Paulo Abrahão!
        </Heading>
      </VStack>

      <IconButton onPress={handleAddAnnouncement} color="black" />
    </HStack>
  );
}
