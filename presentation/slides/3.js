import React from "react";
import { Code, Slide, Text } from "spectacle";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      bgColor="greyTalk"
      transition={["fade"]}
      key={1}
    >
      <Notes
        title="3. react-router-navigation"
        content={[
          "... `react-router-navigation`.",
          "Basically it’s a navigation library for React Native built on top off React Router’s API, so instead of using a lot of functions, you are just composing your navigation by encapsulating components.",
          "And today, I’d like to address the former which is:..."
        ]}
      />
      <Text bold fit size={3} margin="50" textColor="redTalk">
        {"Navigation 💯"}
      </Text>
      <Code previewBackgroundColor="#333333" textColor="whiteTalk">
        yarn add react-router-navigation
      </Code>
    </Slide>
  );
}
