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
        title="12. requestToApi()"
        content={[
          "… `requestToApi()` , which against all odds: performs a request to an API!",
          "The function accepts a single object as an argument where you’ll just have to put all your parameters, a little bit like you would do in Reason with labelled arguments.",
          "However tho, if you’re eager to go down this rabbit hole, React Data Fetching offers you one more thing which is…"
        ]}
      />
      <Heading textColor="redTalk" size={2} style={{ marginBottom: "3.125rem" }}>
        requestToApi()
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/requestToApi.example").default}
        textSize={25}
        style={{ minWidth: "65vw" }}
      />
    </Slide>
  );
}
