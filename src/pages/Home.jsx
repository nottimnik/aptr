import {
  Flex,
  Stack,
  Wrap,

  Text,
} from "@chakra-ui/react";

import { BiLinkExternal } from "react-icons/bi";

import styled from "styled-components";
import { Layout } from "./../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack>
        <Stack direction={"row"}>
          <Stack width="500px">
            <img src="/images/pages/home/home_art.jpg" alt="home_vector_art" width="500px" />
          </Stack>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            top="0px"
            position={"relative"}
          >
            <h1
              style={{
                fontWeight: 700,
                fontSize: "60px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              Ungureanu Călin
            </h1>
            <Text
              fontSize={"lg"}
              fontFamily={"Caveat"}
              position={"absolute"}
              right={"-125px"}
              transform={"rotate(10deg)"}
            >
              Known also as Timnik
            </Text>
          </Stack>
        </Stack>

        <p
          style={{
            fontSize: "22px",
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "30px",
          }}
        >
          Cybersecurity enthusiast, serial-entrepreneur, musician
        </p>

        <Wrap justifyContent="center">
          <a href="https://medium.com/@timnik" target="_blank" rel="noreferrer">
            <Box>
              <Flex justifyContent="space-between">
                <h1>Writeups</h1>
                <BiLinkExternal />
              </Flex>
              <p>My writeups of ctf challenges and tryhackme rooms.</p>
            </Box>
          </a>

          <a href="https://capitnest.com/" target="_blank" rel="noreferrer">
            <Box>
              <Flex justifyContent="space-between">
                <h1>Capitnest.com</h1>
                <BiLinkExternal />
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
