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
          "If we talk about the 1st one for instance, Axios - with which you might already be familiar with - is probably the most commonly used solution to do that.",
          "Basically you’d just use different functions and tell your code how to get the data you want.",
          "The declarative style on the other hand, uses a different approach.",
          "To give you a concrete example, the 1st result that pops up on NPM when you look for « declarative data fetching » is `react-refetch` built by the folks at Heroku:"
        ]}
      />
      <Heading
        textColor="redTalk"
        size={2}
        style={{ marginBottom: "3.125rem" }}
      >
        Axios
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/axios.example").default}
        textSize={25}
        style={{ minWidth: "80vw", marginLeft: "-7.5vw" }}
      />
    </Slide>
  );
}
