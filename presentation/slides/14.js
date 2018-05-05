import React from "react";
import { Image, Fill, Layout, Slide, Text } from "spectacle";

import Notes from "./notes";

export default function ({ images }) {
  return (
    <Slide
      bgColor="greyTalk"
      textColor="redTalk"
      transition={["slide"]}
      key={2}
    >
      <Notes
        title="14. Read more & shoutouts"
        content={[
          "The project is already available on GitHub if you want to contribute or just give it a try.",
          "There's also a more detailed article on Medium where you’ll find a pretty decent amount of informations.",
          "Last but not least, I really really wanted to thank these 3 wonderful contributors who have already been working on the project, fixing issues and implementing features.",
          "So that’s all from me for today, thank you all for your time, really appreciate it.",
          "I wish you a very nice & warm stay in Paris and feel free to just come and talk to me after if you want to discuss about all this stuff or just chill in the city."
        ]}
      />
      <Text
        bold
        textSize={100}
        textColor="redTalk"
        style={{ minWidth: "80vw", margin: "-3.125rem 0 3.125rem -8.5vw" }}
      >
        React Data Fetching
      </Text>
      <Text
        textSize={36}
        textColor="whiteTalk"
        style={{ marginBottom: "4.6875rem" }}
      >
        GitHub:
        <br />
        <a
          href="https://git.io/rdf"
          target="_blank"
          style={{ color: "#4A90E2" }}
        >
          https://git.io/rdf
        </a>
      </Text>
      <Text
        textSize={36}
        textColor="whiteTalk"
        style={{ marginBottom: "4.6875rem" }}
      >
        In-depth article:
        <br />
        <a
          href="https://medium.com/p/2140a1d36cc8"
          target="_blank"
          style={{ color: "#4A90E2" }}
        >
          https://medium.com/p/2140a1d36cc8
        </a>
      </Text>
      <Text
        textSize={36}
        textColor="whiteTalk"
        style={{ marginBottom: "1.5625rem" }}
      >
        💖 Awesome contributors 💖
      </Text>
      <Layout>
        <Fill>
          <Image
            alt="Aakansha Doshi aka @ad1992 GitHub's profile picture"
            src={images.ad1992}
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Text
            textSize={26}
            textColor="whiteTalk"
            style={{ margin: "1.25rem 0" }}
          >
            Aakansha Doshi
            <br />
            <a
              href="https://github.com/ad1992"
              target="_blank"
              style={{
                fontSize: "1.5625rem",
                color: "white",
                textDecoration: "none"
              }}
            >
              <i>@ad1992</i>
            </a>
          </Text>
        </Fill>
        <Fill>
          <Image
            alt="Mathieu Dumont aka @Madumo GitHub's profile picture"
            src={images.Madumo}
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Text
            textSize={26}
            textColor="whiteTalk"
            style={{ margin: "1.25rem 0" }}
          >
            Mathieu Dumont
            <br />
            <a
              href="https://github.com/Madumo"
              target="_blank"
              style={{
                fontSize: "1.5625rem",
                color: "white",
                textDecoration: "none"
              }}
            >
              <i>@Madumo</i>
            </a>
          </Text>
        </Fill>
        <Fill>
          <Image
            alt="Luong Dang Hai aka @jarvisluong GitHub's profile picture"
            src={images.jarvisluong}
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Text
            textSize={26}
            textColor="whiteTalk"
            style={{ margin: "1.25rem 0" }}
          >
            Luong Dang Hai
            <br />
            <a
              href="https://github.com/jarvisluong"
              target="_blank"
              style={{
                fontSize: "1.5625rem",
                color: "white",
                textDecoration: "none"
              }}
            >
              <i>@jarvisluong</i>
            </a>
          </Text>
        </Fill>
      </Layout>
    </Slide>
  );
}
