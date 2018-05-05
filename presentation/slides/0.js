import React from "react";
import PropTypes from "prop-types";
import { Heading, Layout, Slide, Text, Typeface } from "spectacle";

import Notes from "./notes";

export default function Title({ images }) {
  return (
    <Slide
      bgImage={images.bgStart}
      bgDarken={0.75}
      transition={["zoom"]}
      key={0}
    >
      <Notes
        title="0. Aloha!"
        content={[
          "Hello everyone! I hope you're doing well and are having a great time at this conference so far!"
        ]}
      />
      <Typeface font="Carter One" weight={400}>
        <Heading size={1} lineHeight={1} textColor="redTalk">
          Declarative data fetching in React
        </Heading>
      </Typeface>
      <Layout>
        <Text margin="3.125rem 0 0" textColor="whiteTalk" size={6} fit>
          Handle your
        </Text>
        <Text margin="3.125rem 0 0" textColor="whiteTalk" size={6} fit>
          {" requests "}
        </Text>
        <Text margin="3.125rem 0 0" textColor="whiteTalk" size={6} fit>
          like it
        </Text>
        <Text margin="3.125rem 0 0" textColor="whiteTalk" size={6} fit>
          {" ain't nothin' "}
        </Text>
      </Layout>
    </Slide>
  );
}

Title.propTypes = {
  images: PropTypes.shape({
    bgPattern: PropTypes.string
  })
};
