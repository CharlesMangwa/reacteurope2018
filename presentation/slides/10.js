import React from "react";
import { Code, Slide, Text } from "spectacle";

import Notes from "./notes";

export default function () {
  return (
    <Slide
      bgColor="greyTalk"
      transition={["fade"]}
      key={1}
    >
      <Notes
        title="10. react-data-fetching 🎉"
        content={[
          "... React Data Fetching, a library for declarative data fetching in React",
          "I designed React Data Fetching to bring into the REST realm, some of the great features we get with the React Apollo components we saw earlier.",
          "It works out of the box anywhere React is running, so you can use it in any React (web), React Native or even Preact application.",
          "With React Data Fetching, everything is just a matter of props. No complex functions or whatsoever: you just need props and that's it."
        ]}
      />
      <Text textSize={80}>{"🎊    🎊    🎊"}</Text>
      <Text bold textSize={100} textColor="redTalk" style={{ margin: "1.25rem 0 3.125rem 0" }}>
        {"REACT DATA FETCHING"}
      </Text>
      <Text textSize={36} textColor="whiteTalk" style={{ marginBottom: "3.125rem" }}>
        <i style={{ fontSize: "1.5625rem" }}>*yet another*</i> library for declarative data fetching in React.
      </Text>
      <Code previewBackgroundColor="#333333" textColor="whiteTalk" textSize={32}>
        {"import { Fetch, ConnnectedFetch, requestToApi } from \"react-data-fetching\""}
      </Code>
    </Slide>
  );
}
