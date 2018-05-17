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
          "Basically it’s a navigation library for React Native built on top off React Router’s API",
          "so instead of using a lot of functions, you handle your navigation just with components.",
          "And today, I’d like to address the latter which is data fetching",
          "And as you can guess from the title of this talk, I see 2 different ways to perform data fetching in React:"
        ]}
      />
      <Text bold fit size={3} textColor="redTalk" margin={50}>
        {"Navigation 💯"}
      </Text>
      <Code previewBackgroundColor="#333333" textColor="whiteTalk">
        yarn add react-router-navigation
      </Code>
    </Slide>
  );
}
