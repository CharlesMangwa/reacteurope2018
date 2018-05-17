import React from "react";
import { CodePane, Fill, Heading, Layout, Slide } from "spectacle";

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
        title="11. (Un)biased comparison"
        content={[
          "Here we have a quick and completely biased side-by-side comparison where you can see React Data Fetching in action",
          "And you’ll notice that the 2 snippets I’m showing you look quite similar; In fact they both give you access to the same ```loading```, ```error``` and ```data``` variables, even if they rely on 2 completely different query languages, which is something I find really awesome tbh witchu.",
          "The library gives you access to a lot of props to handle your different use cases, but if you happen to need a good old function to do the job, you also have access to: …"
        ]}
      />
      <Layout
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          margin: "-70px 0 40px 0"
        }}
      >
        <Heading textColor="redTalk" size={2}>
          Quick comparison
        </Heading>
      </Layout>
      <Layout
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.875rem"
        }}
      >
        <Fill>
          <CodePane
            lang="javascript"
            source={require("../../assets/react-apollo-2.example").default}
            textSize={25}
            style={{ minWidth: "47vw", marginLeft: "-16vw" }}
          />
        </Fill>
        <Fill>
          <CodePane
            lang="javascript"
            source={require("../../assets/fetch.example").default}
            textSize={25}
            style={{ minWidth: "45vw", marginLeft: "3.125rem" }}
          />
        </Fill>
      </Layout>
    </Slide>
  );
}
