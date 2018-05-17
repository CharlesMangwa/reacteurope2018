import React from "react";
import { Heading, Slide, Text } from "spectacle";
// import CodeSlide from "spectacle-code-slide";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      bgColor="redTalk"
      textColor="blueTalk"
      transition={["slide"]}
      key={2}
    >
      <Notes
        title="7. Did somebody say 'render props'?!"
        content={[
          "I mean, let's be honest: as Peggy said earlier, it's 2018 and I'm still about functions and stuff: where are the render props?",
          "Turns out the latest version of React Apollo she mentioned got us covered for this use case."
        ]}
      />
      <Heading
        textFont="Gamja Flower"
        textColor="whiteTalk"
        style={{ minWidth: "67vw", marginLeft: "-1vw" }}
        size={1}
      >
        OK, this hoc looks great but what if I'm
        more of a render props type of person, hun 😤?!
      </Heading>
      <Text
        textFont="Gamja Flower"
        textColor="whiteTalk"
        size={6}
        style={{ marginTop: "3.125rem" }}
      >
        *need some of them components!*
      </Text>
    </Slide>
  );
}
