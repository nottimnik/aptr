import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "styled-components";

import Navbar from "./../components/Navbar";
import { Layout } from "./../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack>
        <h1>Ungureanu Călin Petru</h1>
      </Stack>
    </Layout>
  );
}
