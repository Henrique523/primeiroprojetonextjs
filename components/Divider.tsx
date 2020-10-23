import React from "react";

import { Divider as ChakraDivier, Grid } from "@chakra-ui/core";

const Divider: React.FC = () => {
  return (
    <Grid templateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
      <ChakraDivier marginY={6} />
      <ChakraDivier marginY={6} />
    </Grid>
  );
};

export default Divider;
