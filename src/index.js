import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import { mode } from "@chakra-ui/theme-tools";

import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white","#191919")(props),
      }
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
