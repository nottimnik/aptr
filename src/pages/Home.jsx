import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Wrap
} from "@chakra-ui/react";

import { BiLinkExternal } from "react-icons/bi";

import styled from "styled-components";
import { Layout } from "./../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <Stack>
        
        <h1 style={{fontWeight: 700, fontSize: "35px", textAlign: "center", marginTop: "30px", marginBottom: "30px"}}>Timnik</h1>

        <Wrap justifyContent="center">

        <a href="https://medium.com/@timnik" target="_blank">
        
        <Box>
          <Flex justifyContent="space-between">
          <h1>Writeups</h1>
          <BiLinkExternal/>
          </Flex>
          <p>My writeups of ctf challenges and tryhackme rooms.</p>
        </Box>
        </a>

        <a href="https://capitnest.com/" target="_blank">
        
        <Box>
          <Flex justifyContent="space-between">
          <h1>Capitnest.com</h1>
          <BiLinkExternal/>
          </Flex>
          <p>Crypto price data & news tracking app I've build.</p>
        </Box>
        </a>
        </Wrap>
      </Stack>
    </Layout>
  );
}

const Box = styled.div`
  border-width: 1px;
  border-radius: var(--borderWidth);
  padding: 10px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0.02);
  margin-right: 5px;
  margin-left: 5px;
  

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.64);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 2px;
  }

`;