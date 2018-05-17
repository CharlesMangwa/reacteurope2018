import React from "react";
import { Heading, Layout, Slide } from "spectacle";

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
        title="4. Two different styles"
        content={[
          "...you can either go the imperative-style or the declarative-style.",
          "I know these may be terms you’ve already heard a lot by now, but allow me to briefly go through each one of them."
        ]}
      />
      <Layout>
        <Heading textColor="redTalk" size={2}>
          Imperative
        </Heading>
        <Heading textFont="Gamja Flower" textColor="blueTalk" size={1}>
          Declarative
        </Heading>
      </Layout>
    </Slide>
  );
}
