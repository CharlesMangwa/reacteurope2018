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
        title="13. FetchProvider"
        content={[
          "… `<FetchProvider>`.",
          "`<FetchProvider>` allows you to share some props to all your `<Fetch>` instances by wrapping you're whole application - just like you would do with Redux's Provider -, which can really be timesaving when you don't want to repeat the same logic over and over in your code.",
          "But if we take a steap back, the thing I’m really trying to get through to you here, is how easy it becomes with a declarative approach, to just decide ***what*** you want instead of wasting time defining ***how*** you want it, even in REST now."
        ]}
      />
      <Heading textColor="redTalk" size={2} style={{ marginBottom: "3.125rem" }}>
        {"<FetchProvider />"}
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/fetchProvider.example").default}
        textSize={25}
        style={{ minWidth: "65vw" }}
      />
    </Slide>
  );
}
