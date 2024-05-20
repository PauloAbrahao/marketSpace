import React from "react";
import {HStack, Text, VStack, Pressable, Box} from "native-base";
import {HomeHeader} from "@components/HomeHeader";
import {ArrowRight, Tag, Sliders, MagnifyingGlass} from "phosphor-react-native";
import {TouchableOpacity} from "react-native";
import {Input} from "@components/Input";

export const Catalog = () => {
  const handleSeeAnnouncement = () => {
    console.log("ver anuncios");
  };

  const handleFilter = () => {
    console.log("filtrou");
  };

  return (
    <VStack bg="gray.600" flex={1} px={6}>
      <HomeHeader />

      <Text fontSize={16} fontFamily="body" color="gray.300" mt={5}>
        Seus produtos anunciados para venda
      </Text>

      <HStack
        bg="#647AC710"
        rounded={6}
        h={70}
        px={5}
        mt={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Tag size={24} color="#364D9D" />
          <VStack ml={5}>
            <Text fontSize={22} fontFamily="heading" color="gray.200">
              4
            </Text>
            <Text fontSize={14} fontFamily="body" color="gray.200" mt={-1}>
              anúncios ativos
            </Text>
          </VStack>
        </HStack>

        <TouchableOpacity onPress={handleSeeAnnouncement}>
          <HStack alignItems="center">
            <Text fontSize={14} fontFamily="heading" mr={3} color="blue.700">
              Meus anúncios
            </Text>
            <ArrowRight size={18} color="#364D9D" />
          </HStack>
        </TouchableOpacity>
      </HStack>

      <Text fontSize={16} fontFamily="body" color="gray.300" mt={8} mb={4}>
        Compre produtos variados
      </Text>

      <Input
        placeholder="Buscar anúncio"
        InputRightElement={
          <HStack pr={5}>
            <MagnifyingGlass color="#3E3A40" weight="bold" />
            <Box borderRightColor="gray.400" borderRightWidth={0.5} mx={3} />
            <Pressable onPress={handleFilter}>
              <Sliders color="#3E3A40" weight="bold" />
            </Pressable>
          </HStack>
        }
      />
    </VStack>
  );
};
