import { Flex, Heading, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      direction={"column"}
      px={4}
      py={"28px"}
      bg={"blue.900"}
      color={"gray.200"}
      bgImage={["/bg-sm.jpg", "/bg-lg.jpg"]}
      // bgPosition={"center"}
      bgRepeat={"round"}
    >
      <VStack alignItems={"flex-start"} spacing={2}>
        <Heading as={"h1"} fontSize={20} fontWeight={500} lineHeight={"30px"}>
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Heading as={"h2"} fontSize={14} fontWeight={400} lineHeight={"21px"}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Heading>
      </VStack>
    </Flex>
  );
}
