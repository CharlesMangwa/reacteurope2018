import React from "react";
import { CodePane, Fill, Heading, Layout, Slide, Text } from "spectacle";

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
        title="8. React Apollo"
        content={[
          "Turns out the latest version of React Apollo gives us a very great example for this use case.",
          "You might already by familiar with GraphQL and Apollo Client, but here’s how you can perform the exact same user fetching I showed you earlier with these tools:",
          "And as we can see, by using this technique, we don’t only get a more convenient code - imo -we also have access to more features, through `loading` and `error`  for instance.",
          "I took Apollo as an example but, the same thing applies with the `QueryRenderer />` from `relay-modern`!",
          "I don’t know about you, but I really like the idea to just ditch functions in favor of simple components."
        ]}
      />
      <Layout style={{ justifyContent: "center", alignItems: "flex-end" }}>
        <Heading textColor="redTalk" size={2}>
          React Apollo
        </Heading>
        <Text
          textFont="Gamja Flower"
          textColor="blueTalk"
          textSize={45}
          style={{ margin: "0 0 1.25rem 0.625rem" }}
        >
          v2.1
        </Text>
      </Layout>
      <Layout
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "3.125rem"
        }}
      >
        <Fill>
          <CodePane
            lang="javascript"
            source={require("../../assets/query.example").default}
            textSize={30}
            style={{ minWidth: "30vw", marginLeft: "-16vw" }}
          />
        </Fill>
        <Fill>
          <CodePane
            lang="javascript"
            source={require("../../assets/react-apollo-1.example").default}
            textSize={30}
            style={{ minWidth: "62vw", marginLeft: "3.125rem" }}
          />
        </Fill>
      </Layout>
    </Slide>
  );
}
