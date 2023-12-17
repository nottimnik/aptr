import {
  Flex,
  Stack,
  Wrap,
  Heading,
  chakra,
  Button,
  Image,
  Text,
  Container,
  Skeleton,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Layout } from "./../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Image
        src="/images/background.jpg"
        width="100%"
        alt="background"
        objectFit="cover"
        height="400px"
        filter="brightness(.8)"
      />
      <p
        style={{
          fontStyle: "italic",
          textAlign: "right",
          color: "gray",
          fontSize: "10px",
        }}
      >
        “Aeneas Flees Burning Troy,” by Federico Barocci (1598). Via Wikimedia
        Commons.
      </p>

      <Text
        color="white"
        fontSize="30px"
        fontWeight="600"
        width="800px"
        marginTop="40px"
      >
        Studying the human behavior and empowering lives through innovative
        psychological technologies.
      </Text>

      <Link to="/about">
        <Button marginTop="10px">Learn about APTR</Button>
      </Link>

      <Text
        color="white"
        fontSize="50px"
        fontWeight="700"
        marginTop="50px"
        marginBottom="20px"
        
      >
        Software
      </Text>

      <Flex justifyContent="center" flexWrap="wrap">
        <Box width={{ base: "100%", lg: "50%" }} padding="12px" color="gray">
          <Text
            color="white"
            fontSize="40px"
            fontWeight="600"
            marginTop="0px"
            textAlign="center"
            display="flex"
          >
            <Image
              src="/images/icons/wellbe.png"
              height="40px"
              marginTop="10px"
              marginRight="5px"
            />
            WellBe
          </Text>

          <Text>
            Your personal sanctuary for mental well-being. In the hustle and
            bustle of daily life, finding moments of peace and tranquility is
            essential for a healthy mind. WellBe is your companion on the
            journey to better mental health, offering a diverse range of
            mindfulness exercises and meditation practices tailored to your
            needs.
          </Text>
          
          <Button color="white" marginTop="10px" variant="link">Learn More</Button>
        </Box>

        <Box width={{ base: "100%", lg: "50%" }} padding="12px" color="gray">
          <Text
            color="white"
            fontSize="40px"
            fontWeight="600"
            marginTop="0px"
            textAlign="center"
            display="flex"
            NeuralAds
          >
            Neural Ads
          </Text>

          <Text>
            Neural Ads is a neuromarketing analytics platform that uses advanced
            neuropsychology techniques, such as fMRI and EEG, with ai to provide
            insights into consumer behavior and help you elevate
            your marketing strategies by decoding the subconscious responses to
            your advertisements and product designs.
          </Text>

          <Button color="white" marginTop="10px" variant="link">Learn More</Button>
        </Box>
      </Flex>
    </Layout>
  );
}
