import { Container, Img, Grid, GridItem } from "@chakra-ui/react";

export function Header() {
  return (
    <Grid
      as="header"
      justifyItems={"center"}
      alignContent={"center"}
      h={50}

      // templateColumns={"repeat(3, 1fr)"}
    >
      <GridItem height={"inherit"} p={4}>
        <Img src="/logo.svg" height={"100%"} />
      </GridItem>
    </Grid>
  );
}
