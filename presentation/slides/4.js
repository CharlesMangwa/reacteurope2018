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
          "As you can guess from the title of this talk, I see 2 different ways to perform data fetching in React: you can either go imperative-style or declarative-style.",
          "These may be terms you’ve already heard a lot, but allow to briefly through each one of them."
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
