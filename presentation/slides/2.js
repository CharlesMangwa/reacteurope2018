import React from "react";
import { Appear, Fill, Heading, Layout, Slide, Text } from "spectacle";

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
        title="2. Improvements opportunities"
        content={[
          "...I realized  that I had 2 majors points where I'd like to improve my DX:",
          "The 1st one was how I would handle navigation inside mobile apps and the other one was data fetching.",
          "I had the opportunity to address the former last year on this very stage, when I announced a library I’m working on with a friend called..."
        ]}
      />
      <Heading textColor="redTalk" size={2} style={{ marginBottom: 100 }}>
        2 areas to improve
      </Heading>
      <Layout>
        <Appear order={1}>
          <Fill>
            <Heading margin="25">⛵</Heading>
            <Text textFont="Gamja Flower" textColor="whiteTalk" textSize={55}>
              Navigation
            </Text>
          </Fill>
        </Appear>
        <Appear order={2}>
          <Fill>
            <Heading margin="25">🎣</Heading>
            <Text textFont="Gamja Flower" textColor="whiteTalk" textSize={55}>
              Data fetching
            </Text>
          </Fill>
        </Appear>
      </Layout>
    </Slide>
  );
}
