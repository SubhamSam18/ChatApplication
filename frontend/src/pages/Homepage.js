import { React } from "react";

import SignUp from "../commponents/Authentication/SignUp";
import Login from "../commponents/Authentication/Login";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      {/*Box is similar to div */}
      <Box
        display="flex"
        justifyContent="center"
        padding={3}
        width="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        bg={"white"}
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Omegiligili
        </Text>
      </Box>

      <Box w="100%" p="4" borderRadius="lg" borderWidth="1px" bg={"white"}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<SignUp />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
