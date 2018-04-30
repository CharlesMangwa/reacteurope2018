import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default function ({ images }) {
  return (
    <Slide
      bgImage={images.bgPattern}
      bgDarken={0.75}
      controlColor="redTalk"
      progressColor="redTalk"
      transition={["zoom"]}
    >
      <Heading size={1} lineHeight={1} textColor="redTalk">
        Declarative data fetching in React
      </Heading>
      <Text margin="50px 0 0" textColor="whiteTalk" size={6} fit>
        control your requests like it ain't nothin'
      </Text>
    </Slide>
  );
}
