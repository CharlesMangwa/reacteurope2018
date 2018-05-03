import React from "react";
import { Fill, Heading, Layout, Slide, Text } from "spectacle";

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
        title="9. Trap time!"
        content={[
          " But…there’s a trap in what I just said!",
          "If React Apollo & Apollo Client are meant to be used with a GraphQL API, how are you supposed to use this kinda of cool components with errors and loading states at your disposal, but with a REST API this time?",
          "We know that since Apollo Client 2.0 we can really easily plug a REST API, unfortunately I couldn't to that for the project I was working on, and didn't find any solution that allows me to have the kind of component but for REST APIs.",
          "So that’s why after a few months of  work, I came up with something I’m more than excited to introduce you to today.",
          "So folks, introducing:…"
        ]}
      />
      <Heading textColor="redTalk" size={3} style={{ marginBottom: "5.3125rem" }}>
        Data fetching through<br/>a component?
      </Heading>
      <Layout>
        <Fill>
          <Heading margin="40" textColor="blueTalk" size={4}>React Apollo</Heading>
          <Text textFont="Gamja Flower" textColor="whiteTalk" textSize={55}>
            GraphQL
          </Text>
        </Fill>
        <Fill>
          <Heading margin="40" size={4}>🤔❓</Heading>
          <Text textFont="Gamja Flower" textColor="whiteTalk" textSize={55}>
            REST
          </Text>
        </Fill>
      </Layout>
    </Slide>
  );
}
