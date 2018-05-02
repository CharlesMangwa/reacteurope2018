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
          "The declarative style on the other way, uses a different approach. To give you a concrete example, the 1st result that pops up on NPM when you look for « declarative data fetching » is  `react-refetch`  built by the folks at Heroku:",
          "And as you can see, here it’s more about telling your code *what* you want to get access to, instead of *how* to get it, through this higher-order component. Personally, that’s the main difference I see between imperative and declarative."
        ]}
      />
      <Heading textFont="Gamja Flower" textColor="blueTalk" margin={50} size={1}>
        react-refetch
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/react-refetch.example.js").default}
        textSize={30}
      />
    </Slide>
  );
}
