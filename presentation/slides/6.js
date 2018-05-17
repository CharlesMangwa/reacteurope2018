import React from "react";
import { CodePane, Heading, Slide } from "spectacle";
// import CodeSlide from "spectacle-code-slide";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      bgColor="greyTalk"
      textColor="blueTalk"
      transition={["slide"]}
      key={2}
    >
      <Notes
        title="6. Declarative style | react-refetch"
        content={[
          "And this is what I consider to be the main difference between imperative and declarative.",
          "Here it’s more about telling your code **what** you want to get access to, instead of **how** to get it for you, through this higher-order component.",
          "OK at this point, there might be some people in the audience that feel left out."
        ]}
      />
      <Heading
        textFont="Gamja Flower"
        textColor="blueTalk"
        size={1}
        style={{ marginBottom: "3.125rem" }}
      >
        react-refetch
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/react-refetch.example").default}
        textSize={30}
      />
    </Slide>
  );
}
