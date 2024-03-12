import { useState } from "react";
import "./App.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

// 2. Wrap ChakraProvider at the root of your app
function App() {
  return (
    <>
      <ChakraProvider>
        <p>Hello</p>
      </ChakraProvider>
    </>
  );
}

export default App;
