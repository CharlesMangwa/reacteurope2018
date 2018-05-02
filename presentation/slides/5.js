import React from "react";
import { CodePane, Heading, Slide } from "spectacle";
// import CodeSlide from "spectacle-code-slide";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      bgColor="greyTalk"
      textColor="redTalk"
      transition={["slide"]}
      key={2}
    >
      <Notes
        title="5. Imperative style | Axios"
        content={[
          "If we talk about the 1st one, Axios - with which you might already be familiar to - is probably the most commonly used solution to do that",
          "Basically you’d just use different functions and tell your code how to get the data you want."
        ]}
      />
      <Heading textColor="redTalk" margin={50} size={2}>
        Axios
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/axios.example.js").default}
        textSize={25}
        style={{ minWidth: "80vw", marginLeft: "-7.5vw" }}
      />
    </Slide>
  );
}
