import React from "react";
import { Heading, Slide } from "spectacle";
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
        title="7. Did sombebody say render 'props'?!"
        content={[
          "At this point, there might be some people in the audience that feel left out. I mean: this is supposed to be a React conference, I’m almost half-way through my talk and I haven’t displayed a single JSX component!"
        ]}
      />
      <Heading
        textFont="Gamja Flower"
        textColor="whiteTalk"
        style={{ minWidth: "67vw", marginLeft: "-1vw" }}
        size={1}
      >
        OK, this Higher-Order Component looks shiny and stuff, but what if I'm
        more like a render props person, hun 😤?!
      </Heading>
    </Slide>
  );
}
