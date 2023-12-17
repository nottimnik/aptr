import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footerr = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Stack spacing={{ base: "4", md: "5" }}>
      <Flex justifyContent="space-between">
        <Link to="/" >
          <Flex>
            <Image src="/images/logo.png" width="55px" />
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color="white"
              fontWeight="600"
              fontSize="17px"
            >
              Advanced Psychological
              <br />
              Technologies Research
            </Text>
          </Flex>
        </Link>
        <ButtonGroup variant="tertiary">
          
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/advanced-psychological-technologies-research/"
            target="_blank"
            aria-label="LinkedIn"
            color="white"
            icon={<FaLinkedin />}
          />
          {/* <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} /> */}
          {/* <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
          /> */}
        </ButtonGroup>
      </Flex>
      <Text fontSize="sm" color="gray" width="1000px">
        &copy; {new Date().getFullYear()} Advanced Psychological Technologies
        Research | aptr.xyz all rights reserved. 
      </Text>
    </Stack>
  </Container>
);
