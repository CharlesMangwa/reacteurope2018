import React from "react";
import { Slide, Text } from "spectacle";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      transition={["fade"]}
      bgColor="greyTalk"
      key={1}
    >
      <Notes
        title="1. Introduction"
        content={[
          "My name is Charles MANGWA, I'm a student here in Paris, I work essentially with React Native and today I’ll be talking about data fetching in React applications.",
          "Taking a step back with my experience 2 years ago..."
        ]}
      />
      <Text bold fit size={3} margin="50" textColor="redTalk">
        Hi, I'm Charles! 👋
      </Text>
      <Text textSize={40} textFont="Gamja Flower" textColor="whiteTalk">
        Ping me if you're about that React Native life too!
      </Text>
    </Slide>
  );
}

