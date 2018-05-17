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
          "Well, we know that since Apollo Client 2.0 we can easily plug a REST API through ```apollo-link-rest```, but unfortunately I couldn't use GraphQL at all on the project I was working on, and I didn't find any solution that allows me to have this kind of components but for REST APIs.",
          "So that’s why after a few months of work, writing some stuff one day & refactoring the whole thing the day after, I came up with something I'm really excited about and released a few days ago.",
          "So folks, allow me to re-introduce:…"
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
