import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import styled from "styled-components";

export function Layout({ children }) {
  return (
    <Box mb={16}>
      <Navbar />

      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
}

const Scroll = styled.span`
  @media (max-width: 920px) {
    button {
      margin-bottom: 30px;
    }
  }
`;
