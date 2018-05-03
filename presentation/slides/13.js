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
        title="12. requestToApi"
        content={[
          "… `<ConnectedFetch>`.",
          "`<ConnectedFetch>` allows you to share some props to all your `<Fetch>` instances, which can really be timesaving in the longterm.",
          "The thing I’m really trying to get through to you here, is how easy it  becomes to just decide *what* you want instead of wasting time defining *how* you want it, even in REST now."
        ]}
      />
      <Heading textColor="redTalk" size={2} style={{ marginBottom: "3.125rem" }}>
        {"<ConnectedFetch />"}
      </Heading>
      <CodePane
        lang="javascript"
        source={require("../../assets/connectedfetch.example").default}
        textSize={25}
        style={{ minWidth: "65vw" }}
      />
    </Slide>
  );
}
